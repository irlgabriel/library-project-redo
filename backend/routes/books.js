const router = require("express").Router();
let Book = require("../models/book.model");

router.route("/").get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const pages = req.body.pages;

  const newBook = new Book({ title, author, pages });

  newBook
    .save()
    .then(() => res.json("Book added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Book.findById(req.params.id).then((book) => {
    book.title = req.body.title;
    book.author = req.body.author;
    book.pages = req.body.pages;

    book
      .save()
      .then(() => res.json("Book updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
