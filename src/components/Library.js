import React from "react";
import Book from "./Book"

function Library(props) {

  return(
    <div className="library">
      {props.books.map(book => <Book setBooks={props.setBooks} books={props.books} book={book}/>)}
    </div>
  )
}

export default Library;