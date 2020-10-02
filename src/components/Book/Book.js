import React from "react";
import {
  BookContainer,
  BookTitle,
  BookAuthor,
  BookPages,
  DeleteButton,
  StatusDiv,
} from "./Book.elements";
import firebase from "firebase";

export default function Book({ user, book, books, setBooks }) {
  const db = firebase.firestore();
  const collectionName = `Books${user.uid}`;

  const booksCollection = db.collection(collectionName);
  // const [value, loading, error] = useCollection(booksCollection);

  function toggleStatus(e) {
    const bookId = e.target.getAttribute("data-id");
    const bookRef = booksCollection.doc(bookId);
    bookRef.update({ status: book.status === "read" ? "unread" : "read" });
  }
  function deleteHandler(e) {
    e.stopPropagation();
    if (
      window.confirm(
        "Are you sure you want to delete this book? This action cannot be undone."
      )
    ) {
      const bookId = e.target.parentElement.parentElement.getAttribute(
        "data-id"
      );
      console.log(bookId);
      booksCollection.doc(bookId).delete();
    } else {
    }
  }

  return (
    <>
      <BookContainer
        bookStatus={book.status}
        data-id={book.id}
        onClick={toggleStatus}
      >
        <BookTitle>{book.title}</BookTitle>
        <BookAuthor>{book.author}</BookAuthor>
        <BookPages>{book.pages}p.</BookPages>
        <DeleteButton onClick={deleteHandler} />
        <StatusDiv status={book.status}>
          {book.status === "read" ? "READ" : "UNREAD"}
        </StatusDiv>
      </BookContainer>
    </>
  );
}
