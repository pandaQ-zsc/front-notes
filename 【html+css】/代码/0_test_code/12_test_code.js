let arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
  if (i === 2) break
  console.log(arr[i])
}
console.log('-----------------------');
[1, 2, 3].forEach(function (n) {
  console.log(n * 2)
})

let obj = { MAX: 5 }
let myFilter = function (item) {
  if (item > this.MAX) return true
}
let arr2 = [1, 45, 2, 3, 5, 6, 7]
console.log(arr2.filter(myFilter, obj))

function findLongest (entries) {
  return entries.reduce(function (longest, entry) {
    return entry.length > longest.length ? entry : longest
  }, '')
}

console.log(findLongest(['aaa', 'bbbbb', 'c']))

function findLongest2 (entries) {
  return entries.reduce(function (a, b) {
    return a.length > b.length ? a : b
  }, '')
}

console.log(findLongest2(['cccccccccaaa', 'bbbbb', 'c']))

String.prototype.double = function () {
  return this.valueOf() + this.valueOf()
}

let tmp = ('123').double()
console.log(tmp)
console.log()

console.log(Boolean(false))
console.log(Boolean('false'))

Number.prototype.add = function (x) {
  return this + x
}
console.log((9).add(3))
console.log('JavaScript'.indexOf('Script'))

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

function random_str (length) {
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  ALPHABET += 'abcdefghijklmnopqrstuvwxyz'
  ALPHABET += '0123456789-_'
  var str = ''
  for (var i = 0; i < length; ++i) {
    var rand = Math.floor(Math.random() * ALPHABET.length)
    str += ALPHABET.substring(rand, rand + 1)
  }
  return str
}

random_str(6) // "NdQKOr"
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

console.log(Math.floor(0))
//正则表达式练习
let regex = /xyz/i
let regex2 = new RegExp('xyz', 'i')

let regex4 = /\b(\w+)\s+\1\b/

console.log('hello world'.replace(/(\w+)\s(\w+)/, '$2 $1'))
// "world hello"
