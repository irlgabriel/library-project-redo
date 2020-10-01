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

export default function Book({ user, book, books, setBooks}) {
  const db = firebase.firestore()

  const booksCollection = db.collection(`Books${user.uid}`);
  // const [value, loading, error] = useCollection(booksCollection);

  function toggleStatus(e) {
    const bookId = e.target.getAttribute("data-id");
    const bookRef = booksCollection.doc(bookId);
    bookRef.update({status: book.status === "read" ? "unread" : "read"})
    
  }
  function deleteHandler(e) {
    if(window.confirm("Are you sure you want to delete this book? This action cannot be undone.")) {
      const bookId = e.target.parentElement
      //db.collection(collectionName).doc()
    } else {

    }
  }

  return (
    <>
      <BookContainer
        bookStatus={book.status}
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
