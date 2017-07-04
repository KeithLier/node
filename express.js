var express = require('express');
var app = express();

app.get('/',function(req, res) {
    res.send('Hello World');
});

app.post('/', function(req, res) {
    res.send('POST request');
});

app.get('/del_user', function(req, res) {
    res.send('delete page');
});

app.get('/list_users', function(req, res){
    res.send('list user');
});

app.get('/ab*cd', function(req, res){
    res.send("zhengzepipei");
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('http://%s:%s',host,port);
});