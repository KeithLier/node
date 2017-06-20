var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');
// GET
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

//     //解析url参数
//     var params = url.parse(req.url, true).query;
//     res.write("网站名：" + params.name);
//     res.write("\n");
//     res.write("网站 URL：" + params.url);
//     res.end();
//  }).listen(3000);

var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

 // POST
http.createServer(function(req, res) {
    var post = '';

    req.on('data', function(chunk) {
        post += chunk;
    });

    req.on('end', function() {
        post = querystring.parse(post);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(post.name && post.url) { // 输出提交的数据
            res.write("网站名：" + post.name);
            res.write("<br>");
            res.write("网站 URL：" + post.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);
