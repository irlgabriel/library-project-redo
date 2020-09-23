import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import BookForm from "./components/BookForm"
import Library from "./components/Library"

function App() {
  const [books, setBooks] = useState([])
  return (
    <div className="App">
      <Header />
      <BookForm books={books} setBooks={setBooks}/>
      <Library books={books} setBooks={setBooks}/>
      <Footer />
    </div>
  );
}

export default App;