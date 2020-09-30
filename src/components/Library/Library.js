import React from "react";
import { BookForm } from "../../components";
import { Book } from "../../components"
import { Container } from "../../globalStyles";
import { LibraryHeader, BooksContainer } from "./Library.elements";


export default function Library({user, books, setBooks}) {

  return (
    <Container>
      <BookForm user={user}/>
      <LibraryHeader>{`Library(${books.length})`}</LibraryHeader>
      <BooksContainer>
      {books.map(el => <Book key={el.id} book={el} setBooks={setBooks} books={books}/>)}
      </BooksContainer>
    </Container>
  );
}
