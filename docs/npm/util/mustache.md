# mustache
`mustache` 模块引擎

## 用法
```js
var view = {
  title: "Joe",
  calc: function () {
    return 2 + 4;
  }
};

var output = Mustache.render("{{title}} spends {{calc}}", view);
```

## API
#### `Mustache.render(template, view)`
#### `Mustache.parse(template)`
#### `Mustache.tags` property

### CLI
```bash
$ npm install -g mustache

$ mustache dataView.json myTemplate.mustache > output.html
```
```js
{
  "scripts": {
    "build": "mustache dataView.json myTemplate.mustache > public/output.html"
  }
}
```

## 参考
[mustache](https://www.npmjs.com/package/mustache)