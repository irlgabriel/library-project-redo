import React from "react";
import {
  BookContainer,
  BookTitle,
  BookAuthor,
  BookPages,
  DeleteButton,
} from "./Book.elements";
import firebase from "firebase"
import { useCollection } from 'react-firebase-hooks/firestore';

export default function Book({ book, books, setBooks}) {
  const booksCollection = firebase.firestore().collection("Books");
  const [value, loading, error] = useCollection(booksCollection);

  function toggleStatus() {

  }
  function deleteHandler(e) {
    if(window.confirm("Are you sure you want to delete this book? This action cannot be undone.")) {
      const bookId = e.target.parentElement
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
