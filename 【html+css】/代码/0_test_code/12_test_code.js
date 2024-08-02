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

function checkNumber (num) {
  if (typeof num !== 'number') {
    throw new Error('The provided value is not a number')
  }
  return num
}

try {
  try {
    throw new Error('1111111')
  } finally {
    console.log('Finally')
  }
  console.log('Will I run?')
} catch (error) {
  console.error(error.message)
}
// 如果对象的属性是undefined、函数或 XML 对象，该属性会被JSON.stringify()过滤。
let objJson = {
  a: undefined,
  b: function () {

  },
}
console.log(JSON.stringify(objJson))
//如果数组的成员是undefined、函数或 XML 对象，则这些值被转成null。
let arrJson = [1, undefined, function () {}, 3]
console.log(JSON.stringify(arrJson))

//JSON.stringify()方法会忽略对象的不可遍历的属性。
let objProperty = {}
Object.defineProperties(objProperty, {
  'foo': {
    value: 1,
    enumerable: true,
  },
  'bar': {
    value: 3,
    enumerable: false,
  },
})
console.log(JSON.stringify(objProperty))

//toJSON()方法的应用： 将正则对象自动转化为字符串
let regObj = {
  reg: /foo/,
}
console.log(JSON.stringify(regObj))

RegExp.prototype.toJSON = RegExp.prototype.toString
console.log(JSON.stringify(regObj))

