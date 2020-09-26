import React, { useState, useEffect } from "react";
import Book from "./Book";
import firebase from "firebase";
import CreateBook from "./CreateBook";

export default function Library(props) {
  const [books, setBooks] = useState([]);

  function getBooks() {
    const db = firebase.firestore();
    let newBooks = books;
    db.collection(`Books${props.user ? props.user.uid : ""}`)
      .get()
      .then((snapShot) => {
        snapShot.forEach((doc) => {
          newBooks.push(doc.data());
        });
      });
    setBooks(newBooks);
  }

  // ComponentDidMount
  useEffect(getBooks, [props.user]);

  return (
    <div className="library mx-auto w-100">
      <CreateBook user={props.user} setBooks={setBooks} books={books} />
      <h2 className="text-center w-100">Library</h2>
      {books.map((book) => (
        <Book user={props.user} book={book} books={books} setBooks={setBooks} />
      ))}
    </div>
  );
}
