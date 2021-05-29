var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
	title: String,
	player: [
		{
		  type: String,
		  ref: "upvote",
		},
	  ]
});

module.exports = mongoose.model('Team', TeamSchema);