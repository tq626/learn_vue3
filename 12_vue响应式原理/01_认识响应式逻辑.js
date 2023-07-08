let num = 100

console.log(num * 2)
console.log(num * num)

num = 200

// 当num发生改变时, 上面3,4行的代码会自动执行


// 对象的响应式
const obj = {
  name: "tq",
  age: 18
}

// 响应式函数设计
function foo() {
  console.log(obj.name)
  console.log(obj.age)
  console.log(obj.age + 100)
}


// 修改obj对象的属性  
obj.name = "kobe"
