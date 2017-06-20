var mysql = require('mysql');
// var sd = require('silly-datetime');

var connection = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '',
    database : 'mysql'
});

connection.connect();

//创建表user
var createSql = 'create table message (localID integer primary key, content text,createTime integer,modifyTime integer)';
connection.query(createSql, function(err, results){
    if(err){
        console.log('create error', err.message);
        return;
    }
    console.log('------------------create-------------');
    console.log(results);
    console.log('-------------------------------------\n\n');
});

// 插入数据
var date = new Date().getTime();
var addSql = 'insert into message (localID,content,createTime,modifyTime) values(?,?,?,?)';
var addParams = ['1','test',date,date];

connection.query(addSql,addParams,function(err, results){
    if(err){
        console.log('insert error -', err.message);
        return;
    }
    console.log('----------------insert-----------------')
    console.log(results);
}); 



// 查询数据
connection.query('select * from message', function(error, results, fields){
    if(error) throw error;
    console.log('------------------select--------------------')
    console.log(results);
});


//更新数据
var modSql = 'update message set content = ? where localID = ?';
var modParams = ['update','1'];

connection.query(modSql, modParams, function(err, results){
    if(err) {
        console.log('update error ', err.message);
        return;
    }
    console.log('-----------------update-----------------');
    console.log(results);
});


connection.end();