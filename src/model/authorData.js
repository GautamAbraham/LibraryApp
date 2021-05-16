const mongoose = require("mongoose");
mongoose.connect(
	"mongodb+srv://user0:user0@cluster-library.4soza.mongodb.net/LibraryApp?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true }
);

const authorimagepath = "images/authorimages";

const Schema = mongoose.Schema;
const authorSchema = new Schema({
	author: String,
	famous_work: String,
	desc: String,
	img: String,
});

var authorData = mongoose.model("authordata", authorSchema);

module.exports = authorData;

module.exports.authorimagepath = authorimagepath;
