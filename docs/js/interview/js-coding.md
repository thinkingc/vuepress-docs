# JS 手写题

### 防抖
```js
function debounce(fn, delay) {
  var timer = null
  return function(...args) {
    var that = this
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(that, args)
    }, delay)
  }
}
```

### 节流
```js
// 基础版1：时间戳（第一次触发会执行，但不排除不执行的可能）
function throttle(fn, delay) {
  var prev = Date.now()
  return function(...args) {
    var dist = Date.now() - prev
    if (dist >= delay) {
      fn.apply(this, args)
      prev = Date.now()
    }
  }
}

// 基础版2：定时器（最后一次也会执行）
function throttle(fn, delay) {
  var timer = null
  return function(...args) {
    var that = this
    if(!timer) {
      timer = setTimeout(function() {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}

// 进阶版：开始执行、结束执行
function throttle(fn, delay) {
  var timer = null
  var prev = Date.now()
  return function(...args) {
    var that = this
    var remaining = delay - (Date.now() - prev)   // 剩余时间
    if (remaining <= 0) {  // 第 1 次
      fn.apply(that, args)
      prev = Date.now()
    } else { // 第 1 次之后
      timer && clearTimeout(timer)
      timer = setTimeout(function() {
        fn.apply(that, args)
      }, remaining)
    }
  }
}
```

### apply
```js
// 方式1
function apply(fn, context, arr) {
  var s = Symbol()
  context[s] = fn
  const result = context[s](...arr)
  Reflect.deleteProperty(context, s)
  return result
}

// 方式2
Function.prototype.myApply = function(context, arr) {
  let result
  if (typeof context !== 'object') {
    result = this(...arr)
    return result
  }
  context.fn = this
  result = context.fn(...arr)
  Reflect.deleteProperty(context, 'fn')
  return result
}
```

### call
```js
Function.prototype.myCall = function(context, ...rest) {
  var result
  context.fn = this
  result = context.fn(...rest)
  Reflect.deleteProperty(context, 'fn')
  return result
}
```

### bind
```js
Function.prototype.myBind = function(context, ...args0) {
  var originFn = this
  return function F(...args1) {
    var result
    // 判断是否通过 new 调用
    if (new.target === F) {  //  this instanceof F
      return new originFn(...args0, ...args1)
    } else {
      return originFn.apply(context, args0.concat(args1))
    }
  }
}
```

这篇文章推荐，讲挺好[如何模拟实现 JS 的 bind 方法](https://chinese.freecodecamp.org/news/javascript-bind-method/)
```js
// 第三版 实现new调用
Function.prototype.bindFn = function bind(thisArg){
  if(typeof this !== 'function'){
    throw new TypeError(this + ' must be a function');
  }
  // 存储调用bind的函数本身
  var self = this;
  // 去除thisArg的其他参数 转成数组
  var args = [].slice.call(arguments, 1);
  var bound = function(){
    // bind返回的函数 的参数转成数组
    var boundArgs = [].slice.call(arguments);
    var finalArgs = args.concat(boundArgs);
    // new 调用时，其实this instanceof bound判断也不是很准确。es6 new.target就是解决这一问题的。
    if(this instanceof bound){
      // 这里是实现上文描述的 new 的第 1, 2, 4 步
      // 1.创建一个全新的对象
      // 2.并且执行[[Prototype]]链接
      // 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
      // self可能是ES6的箭头函数，没有prototype，所以就没必要再指向做prototype操作。
      if(self.prototype){
        // ES5 提供的方案 Object.create()
        // bound.prototype = Object.create(self.prototype);
        // 但 既然是模拟ES5的bind，那浏览器也基本没有实现Object.create()
        // 所以采用 MDN ployfill方案 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
        function Empty(){}
        Empty.prototype = self.prototype;
        bound.prototype = new Empty();
      }
      // 这里是实现上文描述的 new 的第 3 步
      // 3.生成的新对象会绑定到函数调用的`this`。  -- 重点
      var result = self.apply(this, finalArgs);
      // 这里是实现上文描述的 new 的第 5 步
      // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，
      // 那么`new`表达式中的函数调用会自动返回这个新的对象。
      var isObject = typeof result === 'object' && result !== null;
      var isFunction = typeof result === 'function';
      if(isObject || isFunction){
        return result;
      }
      return this;
    }
    else{
      // apply修改this指向，把两个函数的参数合并传给self函数，并执行self函数，返回执行结果
      return self.apply(thisArg, finalArgs);
    }
  };
  return bound;
}
```

### 实现 new
```js
function myNew(fn, ...args) {
  // 1. 生成新对象，并绑定原型
  var obj = Object.create(fn.prototype)
  // 2. 绑定参数
  var result = fn.apply(obj, args)
  // 3. 返回结果
  return typeof result === 'object' ? result : obj
}
```

### 深拷贝
```js
// 基础版
function deepClone(origin) {
  if (origin == undefined || typeof origin != 'object') {
    return origin
  }
  var result = new origin.constructor() 
  for (var k in origin) {
    result[k] = typeof origin[k] === 'object' ? deepClone(origin[k]) : origin[k]
  }
  return result
}

// 解决循环引用版
function deepClone(origin, wm = new WeakMap()) {
  if (origin == undefined || typeof origin != 'object') {
    return origin
  }
  var val = wm.get(origin)
  // 如果 wm 存在，则直接返回
  if (val) {
    return wm.get(origin)
  }
  var target = new origin.constructor()
  wm.set(origin, target)
  for (var k in origin) {
    target[k] = typeof origin[k] === 'object' ? deepClone(origin[k], wm) : origin[k]
  }
  return target
}
```
