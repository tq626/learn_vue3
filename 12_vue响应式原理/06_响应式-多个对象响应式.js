
class Depend{
  constructor() {
    this.reactiveFns = new Set()
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.add(fn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个函数: 负责通过obj的key获取对应的Depend对象
const objMap = new WeakMap()
function getDepend(obj, key) {
  // 根据对象obj, 找到对应的map对象
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }

  // 2.根据key,找到对应的depend对象
  let dep = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key, dep)
  }

  return dep
}

// 方案一:Object.defineProperty() -> vue2

// function reactive(obj) {
//   Object.keys(obj).forEach(key => {
//     let value = obj[key]
  
//     Object.defineProperty(obj, key, {
//       set: function(newValue) {
//         value = newValue
//         const dep = getDepend(obj, key)
//         dep.notify()
//       },
//       get: function() {
  
//         // 找到对应的obj对象的key对应的dep对象
//         const dep = getDepend(obj, key)
//         dep.addDepend(reactiveFn)
  
//         return value
//       }
//     })
//   })

//   return obj
// }

// 方案三: vue3
function reactive(obj) {
  const objProxy = new Proxy(obj, {
    set: function(target, key, newValue, receiver) {
      // target[key] = newValue
      Reflect.set(target, key, newValue, receiver)
      const dep = getDepend(target, key)
      dep.notify()
    },
    get: function(target, key, receiver) {
      const dep = getDepend(target, key)
      dep.addDepend(reactiveFn)
      return Reflect.get(target, key, receiver)
    }
  })

  return objProxy
}


const obj = reactive({
  name: "kobe",
  age: 18,
  address: "重庆"
})

// 设置一个专门执行响应式函数的一个函数
let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

watchFn(function foo() {
  console.log("foo:", obj.name)
  console.log("foo:", obj.age)
})

watchFn(function bar() {
  console.log("bar:", obj.address)
  
})




// 修改obj的 属性
obj.name = "tq"

