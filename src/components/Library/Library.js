import React from "react";
import { BookForm } from "../../components";
import { Book } from "../../components";
import { Container } from "../../globalStyles";
import {
  Hint,
  LibraryHeader,
  Header,
  BooksContainer,
  NoLogin,
  UserLink,
} from "./Library.elements";

export default function Library({ user, books, setBooks }) {
  return (
    <>
      {user ? (
        <Container>
          <BookForm user={user} />
          <LibraryHeader>{`Library(${books.length})`}</LibraryHeader>
          {books.length ? <Hint>Press on a book to toggle its read status</Hint> : ""}
          <BooksContainer>
            {books.map((el) => (
              <Book
                user={user}
                key={el.id}
                book={el}
                setBooks={setBooks}
                books={books}
              />
            ))}
          </BooksContainer>
        </Container>
      ) : (
        <Container>
          <NoLogin>
            <Header>You need to be logged in to see your books Library!</Header>
            <UserLink to="/sign-up">Sign Up</UserLink>
            <UserLink to="/login">Login</UserLink>
          </NoLogin>
        </Container>
      )}
    </>
  );
}
