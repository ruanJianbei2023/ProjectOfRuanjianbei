// 引入模块
const mysql = require('mysql');
// 建立连接对象
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'resumeanalysissystem'
})
// 连接数据库
conn.connect(function(err){
    if(err){ console.log("连接失败！") };
    console.log("连接成功,当前连接线程ID："+conn.threadId);
})
//导出
module.exports = conn;