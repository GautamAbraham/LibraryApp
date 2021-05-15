const express = require("express");
const authorData = require("../model/authorData");
const authorsRouter = express.Router();

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

	return authorsRouter;
}

module.exports = router;
