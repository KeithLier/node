var fs = require('fs');

// 文件写入
fs.writeFile('file.txt', '我写入的文件\n换行吗？', function(err){
    if(err) {
        return console.error(err);
    }

    console.log('write success');

    // 异步读取文件
    fs.readFile('file.txt', function(err, data){
        if(err){
            return console.error(err);
        }

        console.log('读取成功\n', data.toString());
    });
});

// 同步读取文件
var data = fs.readFileSync('file.txt');
console.log('同步读取:\n', data.toString());

// 打开文件
fs.open('file.txt', 'r+', function(err, fd){
    if(err) {
        return console.error(err);
    }
    console.log('文件打开成功');
})

// 获取文件信息
fs.stat('file.txt', function(err, stats) {
    if(err) {
        return console.error(err);
    }

    console.log(stats);

    console.log('是否为文件(isFile ?' + stats.isFile());
    console.log('是否为目录(isDirectory ?' + stats.isDirectory());
});

// 读取文件字节
fs.open('file.txt', 'r+', function(err, fd) {
    if(err) {
        return console.error(err);
    }
    console.log('文件打开成功');

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if(err) {
            return console.error(err);
        }
        console.log(bytes + ' 字节被读取');

        if(bytes > 0) {
            console.log(buf.slice(0,bytes).toString());
        }

        fs.close(fd, function(err) {
            if(err) {
                return console.error(err);
            }

            console.log('\n\n文件已经关闭\n\n');
        })
    })
});

// 截取文件

var buf = new Buffer(1024);

fs.open('file.txt', 'r+', function(err, fd) {
    if(err) {
        return console.error(err);
    }

    fs.ftruncate(fd, 10, function(err) {
        if(err) {
            return console.error(err);
        }

        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
            if(err) {
                return console.error(err);
             }
            // 输出读取的字节
            if(bytes > 0) {
                console.log(buf.slice(0,bytes).toString());
            }

            //关闭文件
            fs.close(fd, function(err) {
                if(err) {
                    return console.error(err);
                }

            console.log('\n\n文件已经关闭\n\n');
        });
        });
    });
});

// 删除文件
fs.unlink('input.txt.gz', function(err) {
    if(err) {
        return console.error(err);
    }
    console.log('文件已删除');
});

// 创建目录
fs.mkdir('/Users/keith/Desktop/github/Node/test/',function(err) {
    if(err) {
        return console.error(err);
    }

    console.log('\n\n目录创建成功\n');
});

// 读取目录
fs.readdir('/Users/keith/Desktop/github/Node/', function(err, files) {
    if(err) {
        return console.error(err);
    }

    files.forEach( function(file) {
        console.log(file);
    });
});

// 删除目录
fs.rmdir('/Users/keith/Desktop/github/Node/test/', function(err) {
    if(err) {
        return console.error(err);
    }

    console.log('\n\n目录删除成功\n');
});