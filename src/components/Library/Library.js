import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { BookForm } from "../../components";
import { Book } from "../../components"
import { Container } from "../../globalStyles";
import { LibraryHeader, BooksContainer } from "./Library.elements";


export default function Library({user}) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let newBooks = books;
    firebase.firestore().collection(`Books${user ? user.uid : ""}`).get()
    .then(snap => {
      snap.forEach(docRef => {
        newBooks.push(docRef.data())
      })
    })
    setBooks(newBooks);
  }, [])

  return (
    <Container>
      <BookForm user={user}/>
      <LibraryHeader>{`Library(${books.length})`}</LibraryHeader>
      <BooksContainer>
      {books.map(el => <Book book={el} setBooks={setBooks} books={books}/>)}
      </BooksContainer>
    </Container>
  );
}
