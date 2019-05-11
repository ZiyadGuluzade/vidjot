const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating Schema//

const IdeaSchema = new Schema({
	title   : {
		type     : String,
		required : true
	},
	details : {
		type     : String,
		required : true
	},
	date    : {
		type    : Date,
		default : Date.now
	}
});

//created model and connected it to ideaSchema//
mongoose.model('ideas', IdeaSchema);
