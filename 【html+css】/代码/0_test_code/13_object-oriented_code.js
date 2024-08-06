//构造函数特点
//1) 首字母大写 比如说Vehicle
//2) 函数体内部使用了this关键字，代表所要生成的对象实例
//3) 生成对象的时候，必须使用new 命令

var Vehicle = function () {
  this.price = 1000
  return 1000
}
console.log(new Vehicle())
console.log((new Vehicle()).price === 1000)
let obj2 = {
  a: 1,
  b: 2,
}
console.log(Array.prototype === [].__proto__)
let call = [].slice.call(obj2)
// let call = Array.prototype.slice.call(obj2)
console.log(call)
console.log(Array.prototype.slice.apply({ 0: 1, length: 1 })) // [1]
console.log(Array.prototype.slice.apply({ 0: 1 })) // []
function f () {
  if (!new.target) {
    throw new Error('请使用 new 命令')
  } else {
    console.log('使用new 命令构造函数')
  }
}

// f()

let person2 = {
  name: '张三',
  age: 39,
  greeting: function () {
    console.log('-----------------' + this.name)
  },
}
let person3 = Object.create(person2)
person3.greeting()

// this 的使用
// 全局环境使用this, 它指向顶层对象window

var a = {
  b: {
    m: function () {
      console.log(this.p)
    },
    p: 'Hello',
  },
}

a.b.m()

