const express = require("express");
const loginRouter = express.Router();
const userData = require("../model/userData");

function router(nav) {
	loginRouter.get("/", function (req, res) {
		res.render("login", {
			nav,
			title: "Login",
		});
	});
	loginRouter.get("/signup", function (req, res) {
		res.render("signup", {
			nav,
			title: "SignUp",
		});
	});
	loginRouter.post("/register", function (req, res) {
		var item = {
			fname: req.body.fname,
			lname: req.body.lname,
			email: req.body.email,
			mob: req.body.mob,
			password: req.body.password,
		};

		var user = userData(item);
		user.save();
		res.redirect("/login");
	});

	return loginRouter;
}

module.exports = router;
