import React from "react";
import firebase from "firebase";
import {
  BookContainer,
  BookTitle,
  BookAuthor,
  BookPages,
  DeleteButton,
} from "./Book.elements";

export default function Book(props) {
  return (
    <>
      <BookContainer>
        <BookTitle></BookTitle>
        <BookAuthor></BookAuthor>
        <BookPages></BookPages>
        <DeleteButton></DeleteButton>
      </BookContainer>
    </>
  );
}
