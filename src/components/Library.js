import React, { useState, useEffect } from "react";
import axios from "axios";

import Book from "./Book";

export default function Library() {
  const [books, setBooks] = useState([]);

  useEffect(()=> {
    axios.get("http://localhost:5000/books/").then((res) => {
      setBooks(res.data);
    });
  }, [])
  

  return (
    <div className="library mx-auto w-100">
      <h2 className="text-center w-100">Library</h2>
      {books.map(book => 
        <Book
          key={book._id}
          books={books}
          setBooks={setBooks}
          book={book}
          
        />
      )
      }
    </div>
  );

}
