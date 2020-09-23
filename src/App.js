import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import BookForm from "./components/BookForm"
import Library from "./components/Library"

function App() {
  const [books, setBooks] = useState([{title: "Man's search for reason", author: "Viktor E. Frankl", pages: 350}])
  return (
    <div className="App">
      <Header />
      <BookForm books={books} setBooks={setBooks}/>
      <Library books={books}/>
      <Footer />
    </div>
  );
}

export default App;
