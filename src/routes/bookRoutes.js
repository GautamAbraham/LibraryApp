const express = require("express");
const booksRouter = express.Router();
const bookData = require("../model/bookData");
const path = require("path");
//upload path for bookimages
const uploadPath = path.join("public", bookData.bookimagebasepath);

//multer- these are necessary for multer
const multer = require("multer");
const upload = multer({
	dest: uploadPath,
	fileFilter: (req, file, callback) => {
		callback(null, true);
	},
});

function router(nav) {
	booksRouter.get("/", function (req, res) {
		bookData.find().then(function (books) {
			res.render("books", {
				nav,
				title: "Books",
				books,
			});
		});
	});

	booksRouter.get("/:id", function (req, res) {
		const id = req.params.id;
		bookData.findOne({ _id: id }).then(function (book) {
			res.render("book", {
				nav,
				book,
			});
		});
	});

	booksRouter.get("/delete/:id", function (req, res) {
		const id = req.params.id;
		bookData.deleteOne({ _id: id }).then(() => {
			res.redirect("/books");
		});
	});
	// route to go to edit book page
	booksRouter.get("/edit/:id", (req, res) => {
		const id = req.params.id;
		bookData.findById(id).then((data) => {
			res.render("addBook", {
				nav,
				title: "Edit Book Details",
				book: data,
			});
		});
	});
	// route with update fn
	booksRouter.post("/update", upload.single("img"), function (req, res) {
		const fileName = req.file != null ? req.file.filename : null;
		const id = req.body.id;
		var myquery = { _id: id };
		var newvalues = {
			$set: {
				title: req.body.title,
				author: req.body.author,
				genre: req.body.genre,
				desc: req.body.desc,
				img: fileName,
			},
		};
		bookData.updateOne(myquery, newvalues, function (err, res) {
			if (err) throw err;
			console.log("1 document updated");
		});
		res.redirect("/books/" + id);
	});

	return booksRouter;
}

module.exports = router;
