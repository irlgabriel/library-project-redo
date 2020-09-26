import React from "react";
import Book from "../Book/Book";
import firebase from "firebase";
import BookForm from "../BookForm/BookForm";

export default function Library(props) {

  return (
    <div>
      <BookForm />
      <h2>Library</h2>
    </div>
  );
}
