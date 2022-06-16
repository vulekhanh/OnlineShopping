const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const db = require("../models");
const User = db.User;

const { body } = require("express-validator");

const authController = require("../controllers/auth");

router.put(
  "/signup",
  [
    body("username").custom((value, { req }) => {
      return User.findOne({
        where: { username: value },
      }).then((userDoc) => {
        if (userDoc) {
          return Promise.reject("Username address already exists!");
        }
      });
    }),
  ],
  authController.signup
);

router.post("/login", authController.login);

module.exports = router;
