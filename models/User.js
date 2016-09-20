var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = mongoose.model('User', new Schema({
	_id: ObjectId,
	username: String
}));
