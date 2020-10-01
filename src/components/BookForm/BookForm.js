import React, { useState } from "react";
import firebase from "firebase"
import {
  FormGroup,
  Form,
  FormHeader,
  FormLabel,
  FormInput,
  FormSelectGroup,
  FormSelect,
  FormToggler,
  ToggleIcon,
} from "./BookForm.elements";
import { Button } from "../../globalStyles";


export default function BookForm({user}) {
  const [formToggled, setToggle] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [status, setStatus] = useState("unread");
  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeAuthor(e) {
    setAuthor(e.target.value);
  }
  function onChangePages(e) {
    setPages(e.target.value);
  }
  function onChangeStatus(e) {
    setStatus(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();

    const book = {
      title,
      author,
      pages,
      status,
    };
    firebase.firestore().collection(`Books${user ? user.uid : ""}`).add(book)
    .then((book) => {
      const bookId = book.id;
      book.update({id:bookId})
    })
    .catch(err => console.log(err.message))
  }

  function toggleForm() {
    setToggle(!formToggled);
  }

  return (
    <>
      <FormToggler onClick={toggleForm}>
        <FormHeader>Add a new Book&nbsp;</FormHeader>
        <ToggleIcon formToggled={formToggled} />
      </FormToggler>
      <Form formToggled={formToggled} onSubmit={onSubmit}>
        <FormGroup>
          <FormLabel htmlFor="title">Book Title</FormLabel>
          <FormInput
            minLength="5"
            maxLength="50"
            type="text"
            required
            name="title"
            placeholder="e.g. Man's Search for Reason"
            onChange={onChangeTitle}
          ></FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="author">Book Author</FormLabel>
          <FormInput
            minLength="5"
            maxLength="30"
            type="text"
            name="author"
            required
            placeholder="e.g. Viktor E. Frankl"
            onChange={onChangeAuthor}
          ></FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="pages">Pages</FormLabel>
          <FormInput
            required
            type="number"
            placeholder="e.g. 123"
            min="0"
            max="10001"
            name="pages"
            onChange={onChangePages}
          ></FormInput>
        </FormGroup>
        <FormSelectGroup>
          <FormLabel htmlFor="status">Status</FormLabel>
          <FormSelect onChange={onChangeStatus} name="status" defaultValue="unread">
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </FormSelect>
        </FormSelectGroup>
        <FormGroup>
          <Button type="submit">Add Book</Button>
        </FormGroup>
      </Form>
    </>
  );
}
