# dayjs
> Fast 2kB alternative to Moment.js with the same modern API.
> 
> Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.

## Feature
- 🕒 Familiar Moment.js API & patterns
- 💪 Immutable
- 🔥 Chainable
- 🌐 I18n support
- 📦 2kb mini library
- 👫 All browsers supported

## API
It's easy to use Day.js APIs to parse, validate, manipulate, and display dates and times.
```js
dayjs('2018-08-08') // parse

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display

dayjs().set('month', 3).month() // get & set

dayjs().add(1, 'year') // manipulate

dayjs().isBefore(dayjs()) // query
```

## 参考
[dayjs](https://www.npmjs.com/package/dayjs)
[day.js.org](https://day.js.org/)