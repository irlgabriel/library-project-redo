import React from "react";
import {
  ProfileInfo,
  UserEmail,
  BookDetails,
  ReadBook,
  UnreadBook,
  Paragraph,
} from "./Profile.elements";

export default function Profile({ books, user }) {
  const readBooks = [];
  const unreadBooks = [];
  books.forEach((book) => {
    book.status === "read" ? readBooks.push(book) : unreadBooks.push(book);
  });

  return (
    <>
      {user ? (
        <ProfileInfo>
          <UserEmail>Logged in as: {user.email}</UserEmail>
          <BookDetails>
            Library Size: {books.length}
            <br />
            <Paragraph>Read Books({readBooks.length}):</Paragraph>
            {readBooks.map((el) => (
              <ReadBook>{el.title}</ReadBook>
            ))}
            <br />
            <Paragraph>Unread Books({unreadBooks.length}):</Paragraph>
            {unreadBooks.map((el) => (
              <UnreadBook>{el.title}</UnreadBook>
            ))}
          </BookDetails>
        </ProfileInfo>
      ) : (
        ""
      )}
    </>
  );
}
