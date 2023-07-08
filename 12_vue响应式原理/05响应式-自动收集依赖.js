
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


const obj = {
  name: "tq",
  age: 18
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
Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    set: function(newValue) {
      value = newValue
      const dep = getDepend(obj, key)
      dep.notify()
    },
    get: function() {

      // 找到对应的obj对象的key对应的dep对象
      const dep = getDepend(obj, key)
      dep.addDepend(reactiveFn)

      return value
    }
  })
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
  console.log("bar:", obj.name + "hello")
  console.log("bar:", obj.age + 10)
})


// 修改obj的 属性
obj.name = "kobe"
dep.notify()
