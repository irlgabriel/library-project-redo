import React, { useState } from "react";
import { FormGroup, Form, FormHeader, FormLabel, FormInput, Button } from "../Form/Form.elements"

export default function CreateBook(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [status, setStatus] = useState("");
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

  }

  return (
    <Form onSubmit={onSubmit}>
      <FormHeader>Add a new Book!</FormHeader>
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
      <FormGroup>
        <FormLabel htmlFor="status">Status</FormLabel>
        <br />
        <select name="status" defaultValue="unread">
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
      </FormGroup>
      <FormGroup>
        <Button type="submit">Add Book</Button>
      </FormGroup>
    </Form>
  );
}
