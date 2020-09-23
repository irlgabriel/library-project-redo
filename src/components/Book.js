import React from "react";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook() {
    const bookId = this.props.book._id;
    
  }

  render() {
    return (
      <div className="book">
        <h3 className="book-title">{this.props.title}</h3>
        <h5 className="book-author">{this.props.author}</h5>
        <p className="book-pages">{this.props.pages}</p>
        <div onClick={this.deleteBook} className="fas fa-trash"></div>
        <div className="fas fa-book-open"></div>
        <div className="status-div">
          <p className="read-status"></p>
        </div>
      </div>
    );
  }
}
