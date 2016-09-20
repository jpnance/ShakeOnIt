var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
require('./config/routes')(app);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shakeonit');

app.listen(3000, function() {
	console.log('Listening for silly bets...');
});
