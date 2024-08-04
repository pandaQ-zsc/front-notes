import xyz, { name, slogan } from './school.js'
import './log.js'
// import school from './school.js'
//
// console.log(school)

// console.log(name)
// console.log(motto)
// console.log(getTel())

console.log(xyz())
console.log(name)
console.log(slogan)

// const btn = document.getElementById('btn')

//动态导入：可控制在某个时间点来进行按需加载模块，返回值是一个Promise
// btn.onclick = async()=>{
//   const result = await import('./student.js')
//   console.log(result)
// }
