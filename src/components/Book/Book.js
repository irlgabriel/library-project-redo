import React from "react";
import firebase from "firebase";
import {
  BookContainer,
  BookTitle,
  BookAuthor,
  BookPages,
  DeleteButton,
} from "./Book.elements";

export default function Book({book, books, setBooks}) {
  function toggleStatus() {

  }
  return (
    <>
      <BookContainer onClick={toggleStatus}>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthor>{book.author}</BookAuthor>
        <BookPages>{book.pages}</BookPages>
        <DeleteButton></DeleteButton>
      </BookContainer>
    </>
  );
}
