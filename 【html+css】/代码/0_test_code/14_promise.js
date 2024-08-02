async function example () {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('完成!'), 1000)
  })
  console.log('开始！')
  let result = await promise // 等待promise解决
  console.log(result) // 输出: 完成!
}

example()

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true
    if (success) {
      resolve('操作成功')
    } else {
      reject('操作失败')
    }
  }, 1000)
})

promise.then(
  result => {
    console.log(result)
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('第二次操作成功'), 1000)
    })
  }).then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})

//实际应用
async function fetchData () {
  try {
    let response = await fetch('http://baidu/data')
    if (!response.ok) {
      throw new Error('网络响应异常')
    }
    let data = await response.json()
    console.log('获取数据:', data)
  } catch (error) {
    console.log('发生错误:', error)
  }
}

fetchData()
