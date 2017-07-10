var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + '/' + 'user.json','utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
});

// add user data 
var user = {
    "user4" : {
        "name" : "test",
        "password" : "123456",
        "profession" : "developer",
        "id" : 4
    }
}

app.get('/addUser', function(req, res) {
    fs.readFile(__dirname + '/' + 'user.json','utf8', function(err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

// user detail
app.get('/id=:id', function(req, res) {
    fs.readFile(__dirname + '/' + 'user.json','utf8', function(err, data) {
        data = JSON.parse(data);
        var user = data["user" + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

// user delete
app.get('/deleteUserId=:id', function(req, res) {
    fs.readFile(__dirname + '/' + 'user.json','utf8', function(err, data) {
        data = JSON.parse(data);
        console.log("user" + req.params.id);
        delete data["user" + req.params.id];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('host' + host + 'port' + port);
});
