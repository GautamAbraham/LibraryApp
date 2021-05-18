const express = require("express");
const loginRouter = express.Router();
const userData = require("../model/userData");

var session=require('express-session');
var flush=require('connect-flash');





function router(nav) {

	loginRouter.use(session({
		secret:'secter',
		cookie:{maxAge:60000},
		resave:false,
		saveUninitialized:false,
	
	}));
	loginRouter.use(flush());


	loginRouter.get("/", function (req, res) {
		res.render("login", {
			nav,
			title: "Login",
			message: req.flash('message')
		});
	});

	

	loginRouter.post("/signin", function (req, res) {
		userData.findOne(
			{ email: req.body.email, password: req.body.password },
			function (err, user) {
				if (err || !user) {
					// "if error or no user"
					console.log("invalid Login cred");
					req.flash('message', 'Invalid Login credentials, Check email and password again');
					res.redirect("/login");
					// res.send("User not found.");
				} else {
					console.log("purrfect");
					res.redirect("/");
					// res.send("logged in!");
				}
			}
		);
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
		userData.findOne({ email: item.email }, function (err, found) {
			if (err || found) {
				// "if error or user already exist"
				console.log("duplicate email");
				res.send("User already registered with given email ID");
				// res.redirect("/login");
				// res.send("User not found.");
			} else {
				console.log("purrfect");
				user
					.save()
					.then((user) => {
						console.log(user);
						res.redirect("/login");
						// res.send("User added succesfully.");
					})
					.catch((err) => {
						console.log(err);
						res.status(400).send("Unable to create user.");
					});
				// res.redirect("/");
				// res.send("logged in!");
			}
		});
	});

	return loginRouter;
}

module.exports = router;
