import React from "react"

function Book(props) {
  return(
    <div className="book">
      <h2 className="book-title">{props.book.title}</h2>
      <h4 className="book-author">{props.book.author}</h4>
      <p className="book-pages">{props.book.pages}</p>
    </div>
  )
}

export default Book;