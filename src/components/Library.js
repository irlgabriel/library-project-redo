import React from "react";
import Book from "./Book"

function Library(props) {
  return(
    <div className="library">
      {props.books.map(book => <Book book={book}/>)}
    </div>
  )
}

export default Library;