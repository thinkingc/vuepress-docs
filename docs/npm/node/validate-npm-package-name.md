# validate-npm-package-name
> Give me a string and I'll tell you if it's a valid npm package name.  
> This package exports a single synchronous function that takes a string as input and returns an object with two properties:
> - validForNewPackages :: Boolean
> - validForOldPackages :: Boolean


验证npm包名称是否有效。

## Example
**Valid Names**  
```js
var validate = require("validate-npm-package-name")
 
validate("some-package")
validate("example.com")
validate("under_score")
validate("123numeric")
validate("excited!")
validate("@npm/thingy")
validate("@jane/foo.js")
```
All of the above names are valid, so you'll get this object back:  
```js
{
  validForNewPackages: true,
  validForOldPackages: true
}
```

**Invalid Names**  
```js
validate(" leading-space:and:weirdchars")
```
That was never a valid package name, so you get this:
```js
{
  validForNewPackages: false,
  validForOldPackages: false,
  errors: [
    'name cannot contain leading or trailing spaces',
    'name can only contain URL-friendly characters'
  ]
}
```

## 参考
[validate-npm-package-name](https://www.npmjs.com/package/validate-npm-package-name)