import React, { useState, useEffect } from "react";
import Book from "./Book";
import firebase from "firebase"
import CreateBook from "./CreateBook";

export default function Library(props) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const db = firebase.firestore();
    console.log("trying to retrieve books", props.user ? props.user.uid : "")
    db.collection(`Users${ props.user ? props.user.uid : ""}`).get()
    .then(snapShot => {
      snapShot.forEach(doc => {
        setBooks([...books, doc.data()])
      })
    })
  }, [props.user]);
  return (
    <div className="library mx-auto w-100">
      <CreateBook user={props.user}/>
      <h2 className="text-center w-100">Library</h2>
      {books.map(book =>
        <Book key={book.id} user={props.user} book={book} books={books} setBooks={setBooks}/>  
      )}
    </div>
  );
}
