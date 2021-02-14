const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretCode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretCode"));

//routes
app.post("/login", (req,res) => {
    console.log("login",req.body);
})
app.post("/register", (req,res) => {
    console.log(req.body);
})
app.get("/user", (req,res) => {
    console.log(req.body);
})

app.listen(4000, () => {
  console.log("Server is started on 4000");
});
