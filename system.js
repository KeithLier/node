var os = require('os');
var dns = require('dns');


// CPU字节数
console.log('endianness:' + os.endianness());

// 操作系统
console.log('type:' + os.type());

// 操作系统名
console.log('platform:' + os.platform());

// 系统内存
console.log('total memory:' + os.totalmem());

// 系统空闲内存
console.log('free memory:' + os.freemem());

// 解析域名

dns.lookup('www.github.com', function onLookup (err, address, family) {
    console.log('ip地址:' + address);
    dns.reverse(address, function(err, hostnames){
        if(err) {
            console.log(err.stack);
        }
        console.log('反向解析' + address + ':' + JSON.stringify(hostnames));
    });
});