var User = require('../models/User');

module.exports.show = function(req, res) {
	User.find({}, function(err, docs) {
		res.send(docs);
	});
};

module.exports.signUp = function(req, res) {
	var newUser = new User();

	newUser.username = req.body.username;
	newUser.save(function(err) {
		if (!err) {
			res.send(newUser);
		}
		else {
			res.send('nope');
		}
	});
};
