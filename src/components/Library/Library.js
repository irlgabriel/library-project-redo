import React, { useState } from "react";
import BookForm from "../BookForm/BookForm";
import { Container } from "../../globalStyles";
import { LibraryHeader } from "./Library.elements";

export default function Library(props) {
  const [books, setBooks] = useState([]);

  return (
    <Container>
      <BookForm />
      <LibraryHeader>Library</LibraryHeader>
    </Container>
  );
}
