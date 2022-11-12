var createError = require("http-errors");
var colors = require("colors");
var express = require("express");
var dotenv = require("dotenv").config({ path: "../.env" });
var bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
var logger = require("morgan");
var { errorHandler } = require("./middleware/errorMiddleware");

var usersRouter = require("./routes/users");

// Connect to database
connectDB();

var app = express();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// mock database
let users = [
  { email: "qw@e.com", password: "1234" },
  { email: "as@e.com", password: "1234" },
  { email: "zx@e.com", password: "1234" },
];

//1. home page
// app.get("/", (_, res) => {
//   console.log("Welcome to home page");
//   res.status(200).json({ message: "Welcome to home page" });
// });

//1. logIn => get users => GET
// app.get("/login", (_, res) => {
//   console.log("Log in an existing user");
//   res.status(200).json(users);
// });

//2. SignUp => register new user => return a boolean flag / status => POST
// app.post("/signup", jsonParser, (req, res) => {
//   console.log("sign up a user");
//   if (req.body) {
//     users = [...users, req.body];
//     res.status(200).json({ message: "succeed" });
//     return;
//   }

//   //error handling
//   res.status(409).json({ message: "failed" });
// });

//3. modifyUser => change existing user's password => PUT

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// app.listen(5000, () => {
//   console.log("Server starts on port 5000");
// });

module.exports = app;
