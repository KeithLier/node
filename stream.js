var fs = require("fs");
var zlib = require('zlib');

var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt')

// 设置编UTF8
readerStream.setEncoding('UTF8');

// 处理流事件 --> data,end,error
readerStream.on('data',function(chunk) {
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error',function(err){
    console.log(err.stack);
});

// 写入流

var string = '我是一个程序员，我爱编程';

// 创建可写入的流 写入 output.txt
var writeStream = fs.createWriteStream('output.txt');

// 使用UTF8编码
writeStream.write(string,'UTF8');

// 标记文件末尾
writeStream.end();

// 处理流事件 --> data,end,error
writeStream.on('finish',function(){
    console.log('write finish');
});

writeStream.on('error',function(err){
    console.log(err.stack);
});

// 管道流  

// 创建可读流
var read = fs.createReadStream('input.txt');

// 创建可写流
var write = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中

read.pipe(write);

// 链式流

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

// 解压 input.txt.gz 文件为 input_gz.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input_gz.txt'));