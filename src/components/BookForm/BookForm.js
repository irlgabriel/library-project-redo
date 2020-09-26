import React, { useState } from "react";
import firebase from "firebase";

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
    const uid = props.user ? props.user.uid : "";
    firebase
      .firestore()
      .collection("Books" + uid)
      .add(book)
      .then((docRef) => {
        props.setBooks([...props.books, book]);
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Add a new Book!</h3>
      <div>
        <label htmlFor="title">Book Title</label>
        <input
          minLength="5"
          maxLength="50"
          type="text"
          required
          name="title"
          placeholder="e.g. Man's Search for Reason"
          onChange={onChangeTitle}
        ></input>
      </div>
      <div>
        <label htmlFor="author">Book Author</label>
        <input
          minLength="5"
          maxLength="30"
          type="text"
          name="author"
          required
          placeholder="e.g. Viktor E. Frankl"
          onChange={onChangeAuthor}
        ></input>
      </div>
      <div>
        <label htmlFor="pages">Pages</label>
        <input
          required
          type="number"
          placeholder="e.g. 123"
          min="0"
          max="10001"
          name="pages"
          onChange={onChangePages}
        ></input>
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <br />
        <select name="status" defaultValue="unread">
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
      </div>
      <div>
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
}
