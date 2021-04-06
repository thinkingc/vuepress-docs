# 判断输入是不是回文字符串

```js
/**
 * 双指针
 * ->... | ...<-
 * 
 */

function isReverseString(str) {
  var half = str.toString().length / 2 | 0
  var l = 0
  var r = str.length - 1

  while (l != half) {
    if (str[l++] != str[r--]) return false
  }
  return true
}

var { log } = console
log(isReverseString('12321'))
log(isReverseString('123321'))
log(isReverseString('234'))
```