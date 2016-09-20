var express = require('express');
var app = express();

var mongoose = require('mongoose');

var User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/shakeonit');

app.get('/', function(req, res) {
	res.send('Shake on it?');
});

app.get('/users', function(req, res) {
	User.find({}, function(err, docs) {
		res.send(docs);
	});
});

app.listen(3000, function() {
	console.log('Listening for silly bets...');
});
