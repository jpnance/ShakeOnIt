var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Bet', new Schema({
	type: {
		type: String,
		required: true,
		enum: [ 'prop' ]
	},
	description: {
		type: String,
		required: true
	},
	sides: {
		type: [String],
		required: true
	},
	takers: [{
		user: {
			type: Schema.ObjectId,
			ref: 'User',
			required: true
		},
		side: {
			type: String,
			required: true
		}
	}],
	status: {
		type: String,
		required: true,
		enum: [ 'proposed', 'agreed', 'resolved' ],
		default: 'proposed'
	}
}));
