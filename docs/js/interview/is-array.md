# 判断一个变量是否为数组

## 几种方式
interviewer：说一下如何判断一个变量是否为数组？   
you：4种，分别是：
1. `object instanceof Array`
2. `object.constructor === Array`
3. `Array.isArray(object)`
4. `Object.prototype.toString.call(object)`

回答完毕，看似完美，然而并没有结束。这样的答案没毕业的都能答出来，不能展示你异于常人的能力。下面，是时候展示真正的技术了...

## `instanceof` 缺陷
### `instanceof` 语法
```js
object instanceof constructor
```
> 参数：  
> `object`：某个实例对象  
> `constructor`：某个构造函数

### `instanceof` 描述
**`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。**    

先来看一下 `instanceof` 的用法： 
1. 判断一个实例是否属于某种类型 
```js
function Foo(name) {
    this.name = name;
}
var f = new Foo('zhangsan');
console.log(f instanceof Foo); //true
console.log(f instanceof Object); //true
```
2. 判断一个实例是否属于它的父类型
```js
function Person() {};
function Student() {};

var p = new Person();
Student.prototype = p;
var s = new Student();

console.log(s instanceof Student); //true
console.log(s instanceof Person); //true

// 解释：A instanceof C 等价于 A 是否是 C子类，或者后代？
```

`f instanceof Foo` **判断逻辑是：`f` 的 `__proto__` 一层一层往上，能否对应到 `Foo.prototype`。**  

判断逻辑翻译成js代码如下：  
```js
_instanceof(f, Foo);  

// 这里相当于实现了 instanceof -- 经常考的手写 instanceof 题
function _instanceof(L, R) {
    var R = R.prototype;
    var L = L.__proto__;
    while(true) {
        if(L == null) {
            return false;
        }
        if(L == R) {
            return true;
        }
        L = L.__proto__;
    }
}
```
`instanceof` 不准确的原因：  
```js
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);

var arr = [1,2,3];
xArray = window.frames[0].Array;  //iframe中的构造函数
var arrx = new xArray(4,5,6);

console.log(arrx instanceof Array);  //false
console.log(arrx.constructor == Array);// false

console.log(Array.prototype == xArray.prototype); //false
console.log(arr instanceof xArray); //false

console.log(arrx.constructor === Array);// false
console.log(arr.constructor === Array);// true
console.log(arrx.constructor === xArray);// true
console.log(Array.isArray(arrx));  //true
```
红宝书4：P142 检测数组原话：  

**使用 `instanceof` 的问题是假定只有一个全局执行上下文**。如果网页里有多个框架，则可能涉及两个不同的全局执行上下文，因此就会有两
个不同版本的 `Array` 构造函数。如果要把数组从一个框架传给另一个框
架，则这个数组的构造函数将有别于在第二个框架内本地创建的数组。  

想深入了解 `instanceof` 可以参考：[JavaScript instanceof 运算符深入剖析](https://developer.ibm.com/zh/articles/1306-jiangjj-jsinstanceof/)

## `constructor` 缺陷
因为 **`constructor` 可以被重写**，所以不能确保一定是数组。比如：
```js
var str = 'abc';
str.constructor = Array;
str.constructor === Array // return true
```
复制代码而很明显str不是数组。
而且constructor和instanceof存在同样问题，不同执行环境下，constructor判断不正确问题。


参考：  
[判断是否是数组的几种方法](https://juejin.im/post/6844903710766661640)   
[instanceof - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 

