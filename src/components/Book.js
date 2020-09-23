import React from "react";

export default class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <h2 className="book-title">{this.props.title}</h2>
        <h4 className="book-author">{this.props.author}</h4>
        <p className="book-pages">{this.props.pages}</p>
        <div className="fas fa-trash"></div>
        <div className="fas fa-book-open"></div>
        <div className="status-div">
          <p className="read-status"></p>
        </div>
      </div>
    );
  }
}
