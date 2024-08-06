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

// 判断是否为数据
console.log(typeof matchObj)
// console.log(Array.isArray(matchObj))
// console.log(matchObj instanceof Array)
// console.log(Object.prototype.toString.call(matchObj))

// 将遍历器 iterator 转化为数组
// 方法一
let str = 'test1test2test3'
let arr1 = Array.from(str.matchAll(/t(e)(st(\d?))/g))
// 方法二
// let arr2 = [...str.matchAll(/t(e)(st(\d?))/g)]
console.log(arr1)
