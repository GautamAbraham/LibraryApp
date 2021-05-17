const express = require("express");
const authorData = require("../model/authorData");
const authorsRouter = express.Router();
const path = require("path");
// upload path for authorimages
const uploadPathtwo = path.join("public", authorData.authorimagepath);

//multer- these are necessary for multer
const multer = require("multer");
const uploadtwo = multer({
	dest: uploadPathtwo,
	fileFilter: (req, file, callback) => {
		callback(null, true);
	},
});

function router(nav) {
	authorsRouter.get("/", function (req, res) {
		authorData.find().then(function (authors) {
			res.render("authors", {
				nav,
				title: "Authors",
				authors,
			});
		});
	});

	authorsRouter.get("/:id", function (req, res) {
		const id = req.params.id;
		authorData.findOne({ _id: id }).then(function (author) {
			res.render("author", {
				nav,
				author,
			});
		});
	});

	authorsRouter.get("/delete/:id", function (req, res) {
		const id = req.params.id;
		authorData.deleteOne({ _id: id }).then(() => {
			res.redirect("/authors");
		});
	});
	// route to go to edit book page
	authorsRouter.get("/edit/:id", (req, res) => {
		const id = req.params.id;
		authorData.findById(id).then((data) => {
			res.render("addAuthor", {
				nav,
				title: "Edit Book Details",
				author: data,
			});
		});
	});
	// route with update fn
	authorsRouter.post("/update", uploadtwo.single("imge"), function (req, res) {
		const fileNametwo = req.file != null ? req.file.filename : null;
		const id = req.body.id;
		var myquery = { _id: id };
		var newvalues = {
			$set: {
				author: req.body.author,
				famous_work: req.body.famous_work,
				desc: req.body.desc,
				img: fileNametwo,
			},
		};
		authorData.updateOne(myquery, newvalues, function (err, res) {
			if (err) throw err;
			console.log("1 document updated");
		});
		res.redirect("/authors/" + id);
	});

	return authorsRouter;
}

module.exports = router;
