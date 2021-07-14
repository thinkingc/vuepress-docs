# dotenv
Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`.

## 用法
As early as possible in your application, require and configure dotenv.

```js
require('dotenv').config([options])

require('dotenv').config({ path: '.dev.env'})  // { parsed: { PORT: '80'} }
```

Create a `.env` file in the root directory of your project. Add environment-specific variables on new lines in the form of `NAME=VALUE`. For example:
```js
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

`process.env` now has the keys and values you defined in your `.env` file.
```js
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

## .env 扩展
For dotenv@2.x.x: Yes. `dotenv.config()` now returns an object representing the parsed .env file. This gives you everything you need to continue setting values on `process.env`. For example:  
```js
const dotenv = require('dotenv')
const variableExpansion = require('dotenv-expand')
const myEnv = dotenv.config()
variableExpansion(myEnv)
```

或者通过命令行方式加到`process.env`:
```js
> PORT=8000 node ./script.js  // process对象： { env: { PORT: 8000} ...}
```

## 参考
[dotenv](https://github.com/motdotla/dotenv#readme)