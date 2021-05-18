const express = require("express");
const app = express();
const port = process.env.PORT || 9999;

// var session=require('express-session');
// var flush=require('connect-flash');


var nav = [
	{ link: "/books", name: "Books" },
	{ link: "/authors", name: "Authors" },
	{ link: "/admin/addbook", name: "Add Book" },
	{ link: "/admin/addauthor", name: "Add Author" },
	{ link: "/login", name: "Login" },
];

const booksRouter = require("./src/routes/bookRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const loginRouter = require("./src/routes/loginRoutes")(nav);
const adminRouter = require("./src/routes/adminRoutes")(nav);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/login", loginRouter);
app.use("/admin", adminRouter);


// app.use(session({
// 	secret:'secter',
// 	cookie:{maxAge:60000},
// 	resave:false,
// 	saveUninitialized:false,

// }));
// app.use(flush());



app.get("/", function (req, res) {
	res.render("index", {
		nav,
		title: "Library",
		// message: req.flash('message')
	});
});

app.listen(port, () => {
	console.log("Server ready at " + port);
});
