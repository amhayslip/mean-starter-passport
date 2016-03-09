var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/news');

require('./models/Users');
require('./config/passport');

var routes = require('./routes/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(passport.initialize());

app.use('/', routes);

var port = process.env.PORT || 3000;

console.log(port)

app.listen(port, function () {
  console.log('Listening on ' + port);
});