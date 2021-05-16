const express = require("express");
const adminRouter = express.Router();
const bookData = require("../model/bookData");
const authorData = require("../model/authorData");

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
			desc: req.body.desc,
			img: req.body.img,
		};

		var book = bookData(item);
		book.save();
		res.redirect("/books");
	});
        
	adminRouter.get('/:id',function(req,res){
        const id = req.params.id;
        
        bookData.deleteOne({_id:id})
        .then(function(books){
            res.redirect('/books');

        });
        
    
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
			famous_work: req.body.famous_work,
			desc: req.body.desc,
			img: req.body.img,
		};

		var author = authorData(item);
		author.save();
		res.redirect("/authors");
	});

	return adminRouter;
}

module.exports = router;
