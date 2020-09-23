import React from "react";
import axios from "axios";

import Book from "./Book";

export default class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };

  }

  componentDidMount() {
    axios.get("http://localhost:5000/books/").then((res) => {
      this.setState({
        books: res.data,
      });
    });
  }

  render() {
    return (
      <div className="library mx-auto w-100">
        <h2 className="text-center w-100">Library</h2>
        {this.state.books.map((book) => (
          <Book
            key={book._id}
            books={this.state.books}
            setState={this.setState}
            book={book}
            title={book.title}
            author={book.author}
            pages={book.pages}
          />
        ))}
      </div>
    );
  }
}
