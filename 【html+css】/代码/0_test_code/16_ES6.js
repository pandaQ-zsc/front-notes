let s = 'Hello'

for (let i = 0; i < 5; i++) {
  console.log(s[i])
  console.log(i)

}

function getRandom (N, M) {
  return Math.floor(Math.random() * (M - N + 1)) + N
}

a = 2
console.log(global.a)

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

for (let [key, value] of map) {
  console.log(key + ' is ' + value)
}

let greeting = `\`Yo\` World!`
console.log(greeting)

s = 'Hello world!'
// s.startsWith()
// s.endsWith()
// s.includes()

const trimString = '   helloss'
console.log(trimString.trimStart())
