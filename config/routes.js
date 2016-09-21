var bets = require('../services/bets');
var users = require('../services/users');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('Shake on it?');
	});

	app.get('/users', users.show);
	app.post('/users', users.signUp);

	app.get('/bets', bets.show);
	app.post('/bets', bets.create);
};
