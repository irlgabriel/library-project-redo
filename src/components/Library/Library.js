import React, { useEffect, useState } from "react";
import { BookForm } from "../../components";
import { Book } from "../../components"
import { Container } from "../../globalStyles";
import { LibraryHeader, BooksContainer } from "./Library.elements";


export default function Library({user, books}) {

  return (
    <Container>
      <BookForm user={user}/>
      <LibraryHeader>{`Library(${books.length})`}</LibraryHeader>
      <BooksContainer>
      {books.map(el => <Book book={el} /*setBooks={setBooks}*/ books={books}/>)}
      </BooksContainer>
    </Container>
  );
}
