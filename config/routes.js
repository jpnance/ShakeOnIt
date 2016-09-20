var User = require('../models/User');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shakeonit');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('Shake on it?');
	});

	app.get('/users', function(req, res) {
		User.find({}, function(err, docs) {
			res.send(docs);
		});
	});
};
