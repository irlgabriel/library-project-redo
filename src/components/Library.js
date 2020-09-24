import React, { useState, useEffect } from "react";
import axios from "axios";

import Book from "./Book";

export default function Library() {
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState("all");
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Equivalent with ComponentDidMount()
  useEffect(() => {
    axios
      .get("http://localhost:5000/books/")
      .then((res) => {
        setBooks(res.data);
        setFilteredBooks(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  function sortHandler(e) {
    setSortBy(e.target.value);
    if(sortBy === "all") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter(book => book.status === sortBy))
    }
  }

  return (
    <div className="library mx-auto w-100">
      <h2 className="text-center w-100">Library</h2>
      <div className="d-flex justify-content-center sort-books w-100">
        <div className="d-flex align-items-center">
          <label
            id="sort-by-label"
            htmlFor="sort-books-by"
            className="font-weight-bold mr-2"
          >
            Sort By
          </label>
          <select
            onChange={sortHandler}
            className="mx-auto"
            name="sort-books-by"
            defaultValue="all"
          >
            <option value="all">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
      {books.map((book) => (
        <Book
          key={book._id}
          books={books}
          setBooks={setBooks}
          book={book}
        />
      ))}
    </div>
  );
}
