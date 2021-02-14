const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const app = express();
const User = require("./user");

//MongoDB Connextion
mongoose.connect(
  "mongodb+srv://shariq123:mama11@shariq.39kje.mongodb.net/passport-auth?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

// try {
//   await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
// } catch (error) {
//   handleError(error);
// }
//Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));

//  Routes

// Login User

app.post("/login", (req, res) => {
  console.log("login", req.body);
});

// Register User

app.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.json({message: "USer already exists!"});
    if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Successfully Created!");
    }
  });
});

// Get a User

app.get("/user", (req, res) => {
  console.log(req.body);
});

app.listen(4000, () => {
  console.log("Server is started on 4000");
});
