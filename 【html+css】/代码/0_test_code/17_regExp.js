// 先行断言  匹配100%
const REG1 = /\d+(?=%)/
// 后行断言  匹配$100
const REG2 = /(?<=$)d+/

// 日期时间解析
const REG_DAT = /(?<year>\d{4})-(?<mounth>\d{2})-(?<day>\d{2})/
const matchObj = REG_DAT.exec('1995-05-17')
for (let i = 0; i < matchObj.length; i++) {
  console.log(matchObj[i])
}
//使用$<组名>引用具名组
const date1 = '2004-09-02'
const REG3 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
const res1 = date1.replace(REG3, '$<day>/$<month>/$<year>')

// 判断是否为数据
// console.log(typeof matchObj)
// console.log(Array.isArray(matchObj))
// console.log(matchObj instanceof Array)
// console.log(Object.prototype.toString.call(matchObj))

// 将遍历器 iterator 转化为数组
// 方法一
let str = 'test1test2test3'
let arr1 = Array.from(str.matchAll(/t(e)(st(\d?))/g))
// 方法二
// let arr2 = [...str.matchAll(/t(e)(st(\d?))/g)]
// console.log(arr1)
//
// // setInterval(函数，间隔时间)
// let m = setInterval(function () {
//   console.log('一秒执行一次')
// }, 1000)
// let n = setInterval(() => {console.log(new Date())}, 1000)

const text = 'zabbcdef'
const re = /ab/d
const result = re.exec(text)

console.log(result)
console.log(result.index) // 1
console.log(result.indices) // [ [1, 3] ]
console.log(typeof 123n) // [ [1, 3] ]

