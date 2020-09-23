const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    author: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    pages: {
      type: Number,
      required: true,
      min: 1,
      max: 10000,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
