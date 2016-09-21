var Bet = require('../models/Bet');

module.exports.show = function(req, res) {
	Bet.find({}).populate('takers.user').exec(function(err, docs) {
		res.send(docs);
	});
};

module.exports.create = function(req, res) {
	var newBet = new Bet();

	newBet.type = req.body.type;
	newBet.description = req.body.description;
	newBet.sides = req.body.sides;
	newBet.takers = req.body.takers;

	newBet.save(function(err) {
		if (!err) {
			res.send(newBet);
		}
		else {
			res.send('nope');
		}
	});
};
