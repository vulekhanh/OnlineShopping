const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../models");
const User = db.User;
const Cart = db.Cart;

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed =))!");

    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const username = req.body.username;
  const password = req.body.password;

  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
      const user = new User({
        password: hashedPw,
        username: username,
      });
      return user.save();
    })
    .then((user) => {
      Cart.create({
        userId: user.id,
        pay: false,
      });
    })
    .then((result) => {
      res.statusCode = 201;
      res.json({ message: "User created" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  let loadedUser;

  User.findOne({ where: { username: username } })
    .then((user) => {
      //verify username
      if (!user) {
        const err = new Error("This username can not be found!");
        err.statusCode = 401;
        throw err;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      //verify password
      if (!isEqual) {
        const err = new Error("Wrong password!");
        err.statusCode = 402;
        throw err;
      }
      //use token
      const token = jwt.sign(
        {
          username: loadedUser.username,
          userId: loadedUser.id.toString(),
        },
        "supersecretsecret",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        message: "Login sucessfully",
        token: token,
        userId: loadedUser.id,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        statusCode = 500;
      }
      next(err);
    });
};
