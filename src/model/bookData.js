const mongoose = require("mongoose");
mongoose.connect(
	"mongodb+srv://user0:user0@cluster-library.4soza.mongodb.net/LibraryApp?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true }
);

const Schema = mongoose.Schema;

//path for storing book images
const bookimagebasepath='images/bookimages'


//Schema Definition
const bookSchema = new Schema({
	title: String,
	author: String,
	genre: String,
	desc: String,
	img: String,
});

var bookData = mongoose.model("bookdata", bookSchema);

module.exports = bookData;

// exporting path so that it can be used in someplace else
module.exports.bookimagebasepath=bookimagebasepath;