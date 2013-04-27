var mongoose = require( "mongoose" );


var PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	body: {
		type: String,
		required: true,
		trim: true
	}
});

module.exports = mongoose.model( "Post", PostSchema );