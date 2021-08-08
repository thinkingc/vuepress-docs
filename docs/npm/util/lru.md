# lru
> A simple LRU cache supporting O(1) set, get and eviction of old keys

最近最少使用，即淘汰算法。

## 用法
```js
var LRU = require('lru');
 
var cache = new LRU(2),
    evicted
 
cache.on('evict',function(data) { evicted = data });
 
cache.set('foo', 'bar');
cache.get('foo'); //=> bar
 
cache.set('foo2', 'bar2');
cache.get('foo2'); //=> bar2
 
cache.set('foo3', 'bar3'); // => evicted = { key: 'foo', value: 'bar' }
cache.get('foo3');         // => 'bar3'
cache.remove('foo2')       // => 'bar2'
cache.remove('foo4')       // => undefined
cache.length               // => 1
cache.keys                 // => ['foo3']
 
cache.clear()              // => it will NOT emit the 'evict' event
cache.length               // => 0
cache.keys                 // => []
```

## 参考
[lru](https://www.npmjs.com/package/lru)