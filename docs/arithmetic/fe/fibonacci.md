# 斐波那契数列

### 递归
```js
function fibonacci(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n > 1) return fibonacci(n - 1) + fibonacci(n - 2)
}
```

### 迭代
```js
function fibonacci(n) {
  let last2 = 0
  let last = 1
  let current = last2
  for (let i = 1; i <= n; i++) {
    last2 = last
    last = current
    current = last2 + last
  }
  return last
}
```

### 尾递归
```js
function fibonacci(n) {
  var _fib = function(n, a, b) {
    if (n === 0) return a
    return _fib(n - 1, b, a + b)
  }
  return _fib(n, 0, 1)
}
```

### 记忆函数
```js
// 记忆函数 memozi
function memozi(fn) {
  var r = {}
  return function(n) {
    // 如果检测到还未被缓存，则先存入 r
    if (r[n] == null) {
      r[n] = fn(n)
    }
    return r[n]
  }
}

var memoziFibon = memozi(function(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return memoziFibon(n - 1) + memoziFibon(n - 2)
})
console.log(memoziFibon(50))
```