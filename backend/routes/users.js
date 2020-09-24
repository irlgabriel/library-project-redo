const router = require("express").Router();
let User = require("../models/user.model");
const bcrypt = require("bcrypt");

const users = [];

router.route("/").get((req, res) => {
  res.json(users);
});

router.route("/").post((req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  users.push(user);
});
