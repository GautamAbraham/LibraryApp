const express = require("express");
const loginRouter = express.Router();

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

	return loginRouter;
}

module.exports = router;
