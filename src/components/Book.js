import React from "react";
import Axios from "axios";

export default class Book extends React.Component {
  constructor(props) {
    super(props)
    this.deleteHandler = this.deleteHandler.bind(this)
  }

  deleteHandler() {
    Axios.delete(`http://localhost:5000/${this.props.book._id}`)
    .then(console.log("Deleted book sucessfully"))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className={`book${this.props.book.status === "read" ? " book-read" : ""}`}>
        <h3 className="book-title">{this.props.book.title}</h3>
        <h5 className="book-author">{this.props.book.author}</h5>
        <p className="book-pages">{this.props.book.pages}</p>
        <div onClick={this.deleteHandler} className="fas fa-trash"></div>
        <div style={{color: this.props.book.status === "unread" ? 'red' : 'green'}} className="fas fa-book-open"></div>
        <div className="status-div">
          <p style={{color: this.props.book.status === "unread" ? 'red' : 'green'}} className="read-status">
            {this.props.book.status === "unread" ? "UNREAD" : "READ"}
          </p>
        </div>
      </div>
    );
  }
}
