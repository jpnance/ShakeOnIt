var express = require('express');
var app = express();

require('./config/routes')(app);

app.listen(3000, function() {
	console.log('Listening for silly bets...');
});
