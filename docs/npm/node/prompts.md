# prompts
> Lightweight, beautiful and user-friendly interactive prompts

轻量、美观、友好的**交互式命令行**。（类似`inquirer`)

- Simple: prompts has no big dependencies nor is it broken into a dozen tiny modules that only work well together.
- User friendly: prompt uses layout and colors to create beautiful cli interfaces.
- Promised: uses promises and async/await. No callback hell.
- Flexible: all prompts are independent and can be used on their own.
- Testable: provides a way to submit answers programmatically.
- Unified: consistent experience across all prompts.

## 例子
#### Single Prompt
Prompt with a single prompt object. Returns an object with the response.
```js
const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'meaning',
    message: 'What is the meaning of life?'
  });

  console.log(response.meaning);
})();
```

## 参考
[prompts](https://www.npmjs.com/package/prompts)