const express = require("express");
const adminRouter = express.Router();
const bookData = require("../model/bookData");

function router(nav) {
	adminRouter.get("/addbook", function (req, res) {
		res.render("addBook", {
			nav,
			title: "Add Book",
		});
	});
	adminRouter.post("/addbook/add", function (req, res) {
		var item = {
			title: req.body.title,
			author: req.body.author,
			genre: req.body.genre,
			img: req.body.img,
		};

		var book = bookData(item);
		book.save();
		res.redirect("/books");
	});

	adminRouter.get("/addauthor", function (req, res) {
		res.render("addAuthor", {
			nav,
			title: "Add Author",
		});
	});
	adminRouter.post("/addauthor/add", function (req, res) {
		var item = {
			author: req.body.author,
			img: req.body.img,
		};

		var author = authorData(item);
		author.save();
		res.redirect("/authors");
	});

	return adminRouter;
}

module.exports = router;
