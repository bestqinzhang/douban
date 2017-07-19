var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	port:8889,
	database:'douban'
})
//获取全部评论
router.get('/getcomments', function(req, res) {
	var sql = 'SELECT * FROM `comments`';
	con.query(sql,function(err,rows,f){
		if(err){
			console.log(err)
		}else{
			res.send(rows)
		}
	})
});
//添加评论
router.post('/addconments', function (req, res) {
  console.log(req.body)
  var time=req.body.time;
  var content=req.body.content;
  var cid=req.body.cid;
  var look=req.body.look;
  var name=req.body.name;
  con.query('INSERT INTO `comments`(`time`,`cid`,`content`,`look`,`name`) VALUES (?,?,?,?,?)',[time,cid,content,look,name],function(err,rows,f){
    if(err){
      console.log(err)
    }else{
      res.send('添加成功')
    }
    })
});

//获取单个评论
router.post('/getSingleconment', function (req,res) {
	console.log(req.body)
	// var sql='SELECT * FROM `comments` WHERE name="'+req.body.name+'"';
	var sql='SELECT * FROM `comments` WHERE name="'+req.body.name+'" AND cid="'+req.body.cid+'"'
	con.query(sql,function(err,rows,f){
		console.log(rows)
		if(err){
			console.log(err)
		}else{
			if(rows.length){
				res.send(rows)
			}else{
				res.send('用户没操作过它')
			}
		}
	});
})

//修改评论
router.post('/modifConment',function(req,res){
	console.log(req.body)
	var cid=req.body.cid;
	var name=req.body.name;
	var content=req.body.content
	var look=req.body.look;

	var sql='UPDATE `comments` SET `name`=?,`content`=?,`look`=? WHERE `cid`=?';
	var arr=[name,content,look,cid]
	con.query(sql,arr,
		function(err,result,f){
		if(err){
			console.log(err);
			res.status(500).send('datebase error').end();
		}else{
			res.send('修改成功')
		}
	})
})
//删除评论
router.post('/deltConment',function(req,res){
	console.log(req.body)
	var id=req.body.cid;
	con.query('DELETE FROM `comments` WHERE cid='+id,function(err,result,f){
		if(err){
			console.log(err)
		}else{
			res.send('删除成功')
		}
	})
})

module.exports = router;
