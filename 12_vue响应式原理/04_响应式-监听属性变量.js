

class Depend{
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn)
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

// 方案一:Object.defineProperty() -> vue2
Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    set: function(newValue) {
      value = newValue
      dep.notify()
    },
    get: function() {
      return value
    }
  })
})

// 设置一个专门执行响应式函数的一个函数
const dep = new Depend()
function watchFn(fn) {
  dep.addDepend(fn)
  fn()
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
