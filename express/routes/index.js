// index.js文件
 
var express = require('express');
const conn = require('../public/javascripts/conn_sql');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 
/* 查询数据库数据操作 */ 
router.get('/check',function(req,res){
  const sql = "SELECT * FROM form_info";
  conn.query(sql,function(err,result){
    if(err){ console.log("查询语句执行异常"); }
    res.send(result);
  })
})
 
module.exports = router;
