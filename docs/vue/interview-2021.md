# Vue 面试题 - 2021

## 响应式数据原理
### Vue 2.x
Vue 2.x 采用**数据劫持 + 发布订阅模式**实现数据双向绑定。通过`Object.defineProperty()`方法来为组件中`data`的每个属性添加`get`和`set`方法，在数据变动时，触发`set`里相应的监听回调函数，将变动信息发布到订阅者。主要步骤如下：  
1. 组件初始化时：
   1. 创建一个**dep 对象作为观察者（依赖收集、订阅发布的载体）**
   2. 用`Object.defineProperty()`方法对`data`中的属性及子属性对象的属性添加`getter`和`setter`方法进行数据劫持。调用`getter`方法时，用对应的 dep 收集依赖；在操作数据时调用`setter`，触发 dep 中收集的依赖。
2. 组件挂载时：
   1. `compiler` 解析模板指令，将其中的变量替换成数据。然后初始化页面，并将每个指令对应的节点绑定上更新函数。后续一旦数据发生变化，便会更新页面。页面发生变化时也会相应发布变动信息。
   2. 组件同时会定义一个 `Watcher` 类作为订阅者，`Watcher`可以作为 dep 和 组件之间的桥梁。在组件渲染时触发`getter`，向 dep 中添加自己。同时自身又有一个`update`方法，待收到 dep 的变动通知时，便会调用自己的 `update` 方法，触发 `compiler` 中的相应函数完成更新。

参考：  
[vue系列---响应式原理实现及Observer源码解析(七)](https://www.cnblogs.com/tugenhua0707/p/11754291.html)  
[JavaScript 进阶之深入理解数据双向绑定](https://my.oschina.net/u/3277205/blog/1499305)

### Vue 3.x
使用`proxy`代理对象，无需再对数组或者对象添加/删除属性的响应做拦截。😎

## 如何监听数组的变化
出于性能问题，vue 劫持了数组的7种原型方法，通过这7种方法修改会触发 dep 更新视图。
1. 函数劫持的方式，重写了数组方法，具体呢就是更改了数组的原型，更改成自己的，用户调数组的一些方法的时候，走的就是自己的方法，然后通知视图去更新。
2. 数组中的每一项可能是对象，那么我们会去遍历数组的每一项进行观测（且只有数组里的对象才能进行观测，观测过的也不会进行观测）。

## Vue.set 原理
用法：`Vue.set (target: Array<any> | Object, key: any, val: any)`。

1. 判断 target 是否为数组
   ```js
   if (Array.isArray(target) && isValidArrayIndex(key)) {
      // 类似$vm.set(vm.$data.arr, 0, 3)
      // 修改数组的长度, 避免索引>数组长度导致splcie()执行有误
      target.length = Math.max(target.length, key)
      // 利用数组的splice变异方法触发响应式, 这个前面讲过
      target.splice(key, 1, val)
      return val
   }
   ```
2. 判断属性是否已经存在
   ```js
   // target为对象, key在target或者target.prototype上，同时必须不能在 Object.prototype 上
   if (key in target && !(key in Object.prototype)) {
      target[key] = val
      return val
   }
   ```
3. 不允许为 Vue 实例 $data 添加属性
   ```js
   // 以上都不成立, 即开始给target创建一个全新的属性
   // 获取Observer实例
   const ob = (target: any).__ob__
   // Vue 实例对象拥有 _isVue 属性, 即不允许给Vue 实例对象添加属性
   // 也不允许Vue.set/$set 函数为根数据对象(vm.$data)添加属性
   if (target._isVue || (ob && ob.vmCount)) {
      process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
      )
      return val
   }
   ```
4. 非响应式属性直接赋值
   ```js
   // target本身就不是响应式数据, 直接赋值
   if (!ob) {
      target[key] = val
      return val
   }
   ```
5. 最后进行响应式处理
   ```js
   // 进行响应式处理
   defineReactive(ob.value, key, val)
   ob.dep.notify()
   return val
   ```

## Vue.nextTick(callback) 用法及原理
### 特性
Vue 在更新 DOM 时是异步执行的。**只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更**。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。
### 实现原理  
Vue 在内部对异步队列尝试使用原生的 `Promise.then`、`MutationObserver` 和 `setImmediate`，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

## Vue 组件通信
1. 父子间通信
   1. props、$on/$emit
   2. $parent、$children
   3. ref
2. 多层级通信
   1. provide/inject
   2. Even Bus
   3. Vuex
3. 跨组件通信
   1. Even Bus
   2. Vuex

## diff 算法
### 注意点
1. 只进行同层比较，不会进行跨层比较。
2. 只有是同一个虚拟节点才会进行精细化比较，否则就是暴力删除旧的，插入新的。
3. 最小量更新，key 很重要。这个可以是这个节点的唯一标识，告诉 diff 算法，在更改前后它们是同一个DOM节点。

## Vue 性能优化
### 编码优化：
- 事件代理
- keep-alive
- 拆分组件
- key 保证唯一性
- 路由懒加载、异步组件
- 防抖节流

### Vue 加载性能优化
- 第三方模块按需导入（ babel-plugin-component ）
- 图片懒加载

### 用户体验
- app-skeleton  骨架屏
- pwa

## mixins 混入注意点
1. 同名钩子函数将合并为一个数组，因此都将被调用。另外，**混入对象的钩子将在组件自身钩子之前调用**。  
2. 值为对象的选项，例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。




[Vue3.0 新特性以及使用经验总结](https://juejin.cn/post/6940454764421316644?utm_source=gold_browser_extension)