import React from "react";
import Book from "./Book"

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{title: "Man's search for reason", author: "Viktor E. Frankl", pages: 350}],
    }
  }
  render() {
    return(
      <div className="library">
        {this.state.books.map(book => <Book book={book}/>)}
      </div>
    )
  }
}

export default Library;