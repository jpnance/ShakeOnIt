var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shakeonit');

app.get('/', function(req, res) {
	res.send('hey');
});

app.listen(3000, function() {
	console.log('Listening for silly bets...');
});
