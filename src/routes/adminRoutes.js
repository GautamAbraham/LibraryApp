const express = require("express");
const adminRouter = express.Router();
const bookData = require("../model/bookData");
const authorData = require("../model/authorData");

const path=require('path');
//upload path for bookimages
const uploadPath = path.join('public',bookData.bookimagebasepath)
// upload path for authorimages
const uploadPathtwo=path.join('public',authorData.authorimagepath)

const imageMimeTypes=['images/jpeg','images/png'];


//multer- these are necessary for multer
const multer=require('multer');
const upload=multer({
    dest:uploadPath,
    fileFilter:(req,file,callback)=>{
        callback(null,true)
    }
})

const uploadtwo=multer({
    dest:uploadPathtwo,
    fileFilter:(req,file,callback)=>{
        callback(null,true)
    }
})

function router(nav) {
	adminRouter.get("/addbook", function (req, res) {
		res.render("addBook", {
			nav,
			title: "Add Book",
		});
	});
	adminRouter.post("/addbook/add",upload.single('img'),function (req, res) {
		const fileName = req.file != null ? req.file.filename:null;

		var item = {
			title: req.body.title,
			author: req.body.author,
			genre: req.body.genre,
			desc: req.body.desc,
			img: fileName
		};

		var book = bookData(item);
		book.save();//saving to the database
		res.redirect("/books");
	});

	adminRouter.get("/addauthor", function (req, res) {
		res.render("addAuthor", {
			nav,
			title: "Add Author",
		});
	});
	adminRouter.post("/addauthor/add",uploadtwo.single('imge'), function (req, res) {
		const fileNametwo = req.file!=null?req.file.filename:null
		var item = {
			author: req.body.author,
			famous_work: req.body.famous_work,
			desc: req.body.desc,
			img: fileNametwo
		};

		var author = authorData(item);
		author.save();
		res.redirect("/authors");
	});

	return adminRouter;
}

module.exports = router;
