import React from "react";

export default class Book extends React.Component {
  constructor(props) {
    super(props)
  }

  deleteHandler() {
    this.props.setState(this.props.books.filter(book => book._id !== this.props.book._id))
  }

  render() {
    return (
      <div className="book">
        <h3 className="book-title">{this.props.book.title}</h3>
        <h5 className="book-author">{this.props.book.author}</h5>
        <p className="book-pages">{this.props.book.pages}</p>
        <div onClick={this.deleteHandler} className="fas fa-trash"></div>
        <div className="fas fa-book-open"></div>
        <div className="status-div">
          <p className="read-status"></p>
        </div>
      </div>
    );
  }
}
