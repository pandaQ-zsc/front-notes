// let s = 'Hello'

// for (let i = 0; i < 5; i++) {
//   console.log(s[i])
//   console.log(i)
// }

//随机函数封装
function getRandom (N, M) {
  return Math.floor(Math.random() * (M - N + 1)) + N
}

// 判断数组和对象
function isObject (value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

// a = 2
// console.log(global.a)

console.log('...............')
let [foo, bar] = [1]
console.log(foo)
console.log(bar)

//函数的声明
function f2 () {}

//函数的表达式
let f3 = function () {

}
let { x: y = 3 } = { x: 5 }
console.log(y)

const map = new Map()
map.set('first', 'hello')
map.set('second', 'world')

// for (let [key, value] of map) {
//   console.log(key + ' is ' + value)
// }

let greeting = `\`Yo\` World!`
console.log(greeting)

s = 'Hello world!'
// console.log(s.startsWith('H'))
// s.endsWith()
// s.includes()

const trimString = '   helloss'
console.log(trimString.trimStart())

// rest参数: 使用...变量名，这样就不需要使用arguments对象了
function add (...values) {
  let sum = 0
  for (let i = 0; i < values.length; i++) {
    sum += values[i]
    console.log(values[i])
  }
  return sum
}

let sum = add(1, 2, 3, 4)
console.log(sum)
// arguments 变量写法 和rest 参数写法
//arguments参数写法
function sortNumber () {
  return Array.from(arguments).sort()
}

let s1 = sortNumber(4, 1, 3, 4, 5, 6, 7, -1)
console.log(s1)

// rest 参数写法

const sortNumber3 = (...values) => values.sort()
console.log(sortNumber3(1, 2, 3, 4, 5555, 1, 2, 3))

function push (arr, ...items) {
  items.forEach((e) => {
    arr.push(e)
  })
}

let a = [2, 3]
push(a, 1, 23, 2, 2, 1, 1)
console.log(a)

const f = function () {}

console.log(f.name)
