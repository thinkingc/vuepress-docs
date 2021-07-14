# address

## 用法
Get IP is sync and get MAC is async for now.  
```js
var address = require('address');

// default interface 'eth' on linux, 'en' on osx.
address.ip();   // '192.168.0.2'
address.ipv6(); // 'fe80::7aca:39ff:feb0:e67d'
address.mac(function (err, addr) {
  console.log(addr); // '78:ca:39:b0:e6:7d'
});

// local loopback
address.ip('lo'); // '127.0.0.1'

// vboxnet MAC
address.mac('vboxnet', function (err, addr) {
  console.log(addr); // '0a:00:27:00:00:00'
});
```

Get all addresses: IPv4, IPv6 and MAC
```js
address(function (err, addrs) {
  console.log(addrs.ip, addrs.ipv6, addrs.mac);
  // '192.168.0.2', 'fe80::7aca:39ff:feb0:e67d', '78:ca:39:b0:e6:7d'
});

address('vboxnet', function (err, addrs) {
  console.log(addrs.ip, addrs.ipv6, addrs.mac);
  // '192.168.56.1', null, '0a:00:27:00:00:00'
});
```

Get an interface info with family
```js
address.interface('IPv4', 'eth1');
// { address: '192.168.1.1', family: 'IPv4', mac: '78:ca:39:b0:e6:7d' }
```

Get DNS servers
```js
address.dns(function (err, addrs) {
  console.log(addrs);
  // ['10.13.2.1', '10.13.2.6']
});
```
## 参考
[address](https://github.com/node-modules/address#readme)

