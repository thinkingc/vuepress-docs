# tiny-invariant
> An invariant function takes a value, and if the value is falsy then the invariant function will throw. If the value is truthy, then the function will not throw.

`falsy` 时 `throw` 错误，终止程序。（与`tiny-warning`不同的是后者不会终止程序，只会提示）

## Example
```js
import invariant from 'tiny-invariant';
 
invariant(truthyValue, 'This should not throw!');
 
invariant(falsyValue, 'This will throw!');
// Error('Invariant violation: This will throw!');
```

## Dropping your message for kb savings!
Big idea: you will want your compiler to convert this code:

```js
invariant(condition, 'My cool message that takes up a lot of kbs');
```

Into this:
```js
if (!condition) {
  if ('production' !== process.env.NODE_ENV) {
    invariant(false, 'My cool message that takes up a lot of kbs');
  } else {
    invariant(false);
  }
}
```

- **Babel**: recommend `babel-plugin-dev-expression`
- **TypeScript**: recommend `tsdx` (or you can run `babel-plugin-dev-expression` after TypeScript compiling)

## 参考
[tiny-invariant](https://github.com/alexreardon/tiny-invariant)