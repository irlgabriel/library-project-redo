import React from "react"

function Book(props) {
  function statusHandler(e) {
    props.setBooks(props.books.map(book => {
      if(book.id === props.book.id) {
        return {...book, readStatus: book.readStatus === "read" ? "unread" : "read"}
      } else {
        return {...book}
      }
    }))
    const btn = e.target;
    btn.style.color = btn.style.color !== 'red' ? 'red' : 'green'; 
  }

  function deleteHandler(e) {
    props.setBooks(props.books.filter(book => book.id !== props.book.id))
  }
  return(
    <div className={`book ${props.book.readStatus === "read" ? "book-read" : ""}`}>
      <h2 className="book-title">{props.book.title}</h2>
      <h4 className="book-author">{props.book.author}</h4>
      <p className="book-pages">{props.book.pages}</p>
      <div className="fas fa-trash" onClick={deleteHandler}></div>
      <div style={{color: props.book.readStatus === "read" ? 'green' : 'red'}} className="fas fa-book-open" onClick={statusHandler}></div>
      <div className="status-div">
        <p className={`read-status ${props.book.readStatus === "read" ? "read" : "unread"}`}>{props.book.readStatus === "read" ? "READ" : "UNREAD"}</p>
      </div>
    </div>
  )
}

export default Book;