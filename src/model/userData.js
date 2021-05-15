const mongoose = require("mongoose");
mongoose.connect(
	"mongodb+srv://user0:user0@cluster-library.4soza.mongodb.net/LibraryApp?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true }
);

const Schema = mongoose.Schema;
const userSchema = new Schema({
	fname: String,
	lname: String,
	mob: String,
	email: String,
	password: String,
});

var userData = mongoose.model("userdata", userSchema);

module.exports = userData;
