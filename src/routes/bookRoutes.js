const express = require("express");
const booksRouter = express.Router();
const bookData = require("../model/bookData");

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

	return booksRouter;
}

module.exports = router;
