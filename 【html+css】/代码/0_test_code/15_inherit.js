function f () {
}

function Animal (name) {
  this.name = name
}

Animal.prototype.color = 'blue'

let a1 = new Animal('aa')
let a2 = new Animal('bb')
console.log(a1.color)
console.log(a2.color)

let MyArray = function () {}
MyArray.prototype = []
// MyArray.prototype.constructor = MyArray

let arr = new MyArray()
arr.push('1')
arr.push('2')
arr.push('3')
console.log(arr.length)
console.log(arr)

//   用const修饰
const arr2 = ['red', 'pink']
arr2.push('blue')
console.log(arr2)

