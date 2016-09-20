var users = require('../services/users');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('Shake on it?');
	});

	app.get('/users', users.show);
};
