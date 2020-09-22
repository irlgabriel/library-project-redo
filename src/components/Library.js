import React from "react";
import Book from "./Book"

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.books = [];
  }
  render() {
    return(
      this.books.map(book => <Book />)
    )
  }
}

export default Library;