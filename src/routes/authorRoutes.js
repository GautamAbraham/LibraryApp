const express = require("express");
const authorsRouter = express.Router();

function router(nav) {
	var authors = [
		{
			name: "J. K. Rowling",
			img: "jkr.jpg",
		},
		{
			name: "J. R. R. Tolkien",
			img: "jrrt.jpg",
		},
		{
			name: "Dan Brown",
			img: "dan.jpg",
		},
	];

	authorsRouter.get("/", function (req, res) {
		res.render("authors", {
			nav,
			title: "Authors",
			authors,
		});
	});

	authorsRouter.get("/:id", function (req, res) {
		const id = req.params.id;
		res.render("author", {
			nav,
			author: authors[id],
		});
	});
	return authorsRouter;
}

module.exports = router;
