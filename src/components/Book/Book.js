import React from "react";
import {
  BookContainer,
  BookTitle,
  BookAuthor,
  BookPages,
  DeleteButton,
} from "./Book.elements";
import firebase from "firebase"

export default function Book({book, books, setBooks}) {
  function toggleStatus() {

  }
  function deleteHandler(e) {
    if(window.confirm("Are you sure you want to delete this book? This action cannot be undone.")) {
      const userId = firebase.auth().currentUser.uid
      const collectionName = `Books${userId}`
      const bookId = e.target.parentElement
      console.log(collectionName, userId, bookId)
      //firebase.firestore().collection(collectionName).doc()
    } else {

    }
  }

  return (
    <>
      <BookContainer
        data-id={book.id}
        onClick={toggleStatus}>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthor>
          {book.author}
          </BookAuthor>
        <BookPages>{book.pages}</BookPages>
        <DeleteButton onClick={deleteHandler} />
      </BookContainer>
    </>
  );
}
