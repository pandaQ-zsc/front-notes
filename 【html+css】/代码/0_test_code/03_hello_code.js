function forLoop (n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i;
    console.log('i === ' + i);
  }
  return res;
}

let res = forLoop(10);
console.log(res);


function whileLoop (n) {
  let res = 0;
  let i = 1;
  while (i <= 10) {
    res += i;
    i++
  }
  console.log('res ---> ' + res);
  return res;
}

let res2 = whileLoop(10);
console.log(res2);

/* 双层 for 循环 */
function nestedForLoop (n) {
  let res = '';
  // 循环 i = 1, 2, ..., n-1, n
  for (let i = 1; i <= n; i++) {
    // 循环 j = 1, 2, ..., n-1, n
    for (let j = 1; j <= n; j++) {
      res += `(${i}, ${j}),`
    }
  }
  return res;
}

let res3 = nestedForLoop(3);
console.log(res3);
// var的函数作用域: var生命的变量具有函数作用域，他们在包含他们的函数内部课件。如果声明在函数外部，则具有全局作用域
// var声明的变量会被提升到作用域的顶部，意味着变量可以在生命之前使用  但是值会是undefined
// let 块作用域 `let`声明的便令具有块作用域，它们在包含它们的话括号`{}`内是可见的。
// 不存在变量提升：`let`生命的比那辆不会被提升到作用域的顶部。尝试在声明之前使用会导致ReferenceError
// let的变量声明具有块作用域，他们在包含他们的花括号`{}` 是可见的
// 不存在变量提升`let`声明的变量不会被提升到作用域的顶部。尝试在生命之前使用会导致ReferenceError

function letTest () {
  console.log(a);
  let a = 10;
  console.log(a);

}

function constTest () {
  console.log(a);
  const a = 10;
  console.log(a);
}

function fib (n) {
  if (n === 1 || n === 2) return n - 1;
  let res = fib(n - 1) + fib(n - 2);
  return res;
}

let res4 = fib(6);
console.log(res4);

function rec (n) {
  if (n === 1) return 1;
  let res = rec(n - 1);
  return n + res;
}
