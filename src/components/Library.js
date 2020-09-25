import React, { useState, useEffect } from "react";
import Book from "./Book";
import firebase from "firebase"
import CreateBook from "./CreateBook";

export default function Library() {
  const [books, setBooks] = useState([]);

  // Equivalent with ComponentDidMount()
  useEffect(() => {
  
  }, []);


  return (
    <div className="library mx-auto w-100">
      <CreateBook />
      <h2 className="text-center w-100">Library</h2>
      {books.map(book =>
        <Book key={book.id} book={book} books={books} setBooks={setBooks}/>  
      )}
    </div>
  );
}
