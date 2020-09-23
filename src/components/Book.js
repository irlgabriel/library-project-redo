import React from "react";
import Axios from "axios";

export default class Book extends React.Component {
  constructor(props) {
    super(props)
    this.deleteHandler = this.deleteHandler.bind(this)
    this.statusHandler = this.statusHandler.bind(this)
  }

  deleteHandler() {
    const bookId = this.props.book._id
    Axios.delete(`http://localhost:5000/books/${bookId}`)
      .then(window.location = "/")
      .catch(err => console.log(err.response.data))
  }

  // Doesn't seem to do anything on the back end side!
  statusHandler() {
    const bookId = this.props.book._id
    const book = {...this.props.book, status: this.props.status === "read" ? "unread" : "read"}
    Axios.post(`http://localhost:5000/books/update/${bookId}`, book)
      .then(console.log(book))
      .catch(err => console.log(err.response.data))
  }

  render() {
    return (
      <div className={`book${this.props.book.status === "read" ? " book-read" : ""}`}>
        <h3 className="book-title">{this.props.book.title}</h3>
        <h5 className="book-author">{this.props.book.author}</h5>
        <p className="book-pages">{this.props.book.pages}</p>
        <div onClick={this.deleteHandler} className="fas fa-trash"></div>
        <div onClick={this.statusHandler} style={{color: this.props.book.status === "unread" ? 'red' : 'green'}} className="fas fa-book-open"></div>
        <div className="status-div">
          <p style={{color: this.props.book.status === "unread" ? 'red' : 'green'}} className="read-status">
            {this.props.book.status === "unread" ? "UNREAD" : "READ"}
          </p>
        </div>
      </div>
    );
  }
}
