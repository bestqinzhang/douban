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

router.post('/login',function(req,res){
	var sql='SELECT * FROM `user` WHERE user_name="'+req.body.Uname+'"';
	con.query(sql,function(err,rows,f){
		if(rows.length){
			if(req.body.Upass==rows[0].user_pwd){
				res.send('用户登录成功');
			}else{
				res.send('密码错误');
			}
		}else{
			res.send('用户名不存在');
		}
	});
})

router.post('/register',function(req,res){
	var state=true;
	var reg='SELECT * FROM `user`';
	con.query(reg,function(err,rows,f){
		for(var i=0;i<rows.length;i++){
			if(req.body.username==rows[i].user_name){
				res.send('用户账号已被注册');
				console.log('用户账号已被注册')
				return;
			}else if(req.body.name==rows[i].name){
				res.send('用户名已被占用')
				console.log('用户名已被占用')
				return;
			}
		}
		if(state){
			var sql='INSERT INTO `user`(`user_name`, `user_pwd`, `name`) VALUES (?,?,?)';
			var arr=[req.body.username,req.body.pass,req.body.name];
			con.query(sql,arr,function(err,rows,f){
				if(err){
					console.log(err)
				}else{
					res.send('注册成功');
					console.log('注册成功');
				}
			})
		}
	});
})

module.exports = router;
 