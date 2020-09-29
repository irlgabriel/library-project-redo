import React from "react";
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

  function deleteHandler() {
    if(window.confirm("Are you sure you want to delete this book? This action cannot be undone.")) {

    } else {

    }
  }

  return (
    <>
      <BookContainer
        data={book.id}
        onClick={toggleStatus}>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthor>
          {book.author}
          </BookAuthor>
        <BookPages>{book.pages}</BookPages>
        <DeleteButton onClick={deleteHandler} ></DeleteButton>
      </BookContainer>
    </>
  );
}
