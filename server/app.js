var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var users=require('./routes/users')
var comments=require('./routes/comments')

var app = express();

var COMMENTS_FILE = path.join(__dirname, 'conments.json');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// //获取短评
// app.get('/getcomments', function(req, res) {
//   console.log(1)
//   fs.readFile(COMMENTS_FILE, function(err, data) {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//     res.json(JSON.parse(data));
//   });
// });
// //添加短评
// app.post('/addcomments', function(req, res) {
//   console.log(req.body)
//   fs.readFile(COMMENTS_FILE, function(err, data) {
//     //获取当前时间
//     function getNowFormatDate() {
//         var date = new Date();
//         var seperator1 = "-";
//         var seperator2 = ":";
//         var month = date.getMonth() + 1;
//         var strDate = date.getDate();
//         if (month >= 1 && month <= 9) {
//             month = "0" + month;
//         }
//         if (strDate >= 0 && strDate <= 9) {
//             strDate = "0" + strDate;
//         }
//         var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
//                 + " " + date.getHours() + seperator2 + date.getMinutes()
//                 + seperator2 + date.getSeconds();
//         return currentdate;
//     }

//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//     var comments = JSON.parse(data);
//     var newComment = {
//       time: getNowFormatDate(),
//       name: req.body.name,
//       content: req.body.content,
//       cid: req.body.cid,
//     };
//     comments.unshift(newComment);
//     fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
//       if (err) {
//         console.error(err);
//         process.exit(1);
//       }
//       res.json(comments);
//     });
//   });
// });

app.use('/users',users)
app.use('/comments',comments)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
