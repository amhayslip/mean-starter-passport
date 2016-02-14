var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/news');

// require('./models/Posts');

// var Post = mongoose.model('Post');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

/* GET home page. */
app.get('/', function (req, res) {
  res.render('index');
});

// app.post('/posts', function(req, res, next) {
//   var post = new Post(req.body);

//   post.save(function(err, post){
//     if(err){ return next(err); }

//     res.json(post);
//   });
// });

// app.get('/posts', function(req, res, next) {
//   Post.find(function(err, posts){
//     if(err){ return next(err); }

//     res.json(posts);
//   });
// });

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Mean Start listening at http://%s:%s', host, port);
});