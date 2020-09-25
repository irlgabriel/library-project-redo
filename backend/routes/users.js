const router = require("express").Router();
let User = require("../models/user.model");

// GET Users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err))
});

// LOGIN User
router.route("/login").post((req, res) => {
  User.find({username: req.body.username, password: req.body.password}).exec()
  .then(user => {
    if(Object.keys(user).length !== 0) {
      res.json(user)
    } else {
      res.status(400).send("User not found");
    }
  })
  .catch(err => res.status(500).send(err))
})

// ADD User
router.route("/").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  user = new User({username, password})

  .save()
  .then(() => res.json("User added"))
  .catch((err) => res.status(400).json("Error" + err))
});

module.exports = router;