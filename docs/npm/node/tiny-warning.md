# tiny-warning
A tiny [warning](https://www.npmjs.com/package/warning) alternative.

`falsy` 时打印错误，不终止程序。（与`tiny-warning`不同的是后者会终止程序）

## Example
```js
import warning from 'tiny-warning';
 
warning(truthyValue, 'This should not log a warning');
 
warning(falsyValue, 'This should log a warning');
// console.warn('Warning: This should log a warning');
```

## Dropping your message for kb savings!
Big idea: you will want your compiler to convert this code:

```js
warning(condition, 'My cool message that takes up a lot of kbs');
```

Into this:
```js
if (!condition) {
  if ('production' !== process.env.NODE_ENV) {
    warning(false, 'My cool message that takes up a lot of kbs');
  } else {
    warning(false);
  }
}
```

- **Babel**: recommend `babel-plugin-dev-expression`
- **TypeScript**: recommend `tsdx` (or you can run `babel-plugin-dev-expression` after TypeScript compiling)

## 参考
[tiny-warning](https://github.com/alexreardon/tiny-warning)