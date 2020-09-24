import React from "react";
import axios from "axios";

export default function Book(props) {
  function deleteHandler() {
    if (
      window.confirm(
        "Are you sure you want to delete this book? This action cannot be undone."
      )
    ) {
      const bookId = props.book._id;
      axios
        .delete(`http://localhost:5000/books/${bookId}`)
        .then((window.location = "/"))
        .catch((err) => console.log(err.response.data));
    }
  }

  // Doesn't seem to do anything on the back end side!
  function statusHandler() {
    const bookId = props.book._id;
    const newBook = {
      ...props.book,
      status: props.book.status === "read" ? "unread" : "read",
    };
    props.setBooks(
      props.books.map((book) => {
        if (book._id === props.book._id) {
          return newBook;
        } else {
          return book;
        }
      })
    );
    console.log(props.books);

    axios
      .post(`http://localhost:5000/books/update/${bookId}`, newBook)
      .then(console.log(newBook))
      .catch((err) => console.log(err.response.data));
  }
  return (
    <div className={`book${props.book.status === "read" ? " book-read" : ""}`}>
      <h3 className="book-title">{props.book.title}</h3>
      <h5 className="book-author">{props.book.author}</h5>
      <p className="book-pages">{props.book.pages}p.</p>
      <div onClick={deleteHandler} className="fas fa-trash"></div>
      <div
        onClick={statusHandler}
        style={{ color: props.book.status === "unread" ? "red" : "green" }}
        className="fas fa-book-open"
      ></div>
      <div className="status-div">
        <p
          style={{ color: props.book.status === "unread" ? "red" : "green" }}
          className="read-status"
        >
          {props.book.status === "unread" ? "UNREAD" : "READ"}
        </p>
      </div>
    </div>
  );
}
