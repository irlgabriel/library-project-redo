import React, { useState } from "react";
import firebase from "firebase"

export default function CreateBook() {
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

    console.log(book)

    const bookRef = firebase.database().ref("Users/default/Books").push();
    book.id = bookRef.key;

    bookRef.set(book);
  

  }

  return (
    <form onSubmit={onSubmit} className="row flex-wrap mx-auto p-3 align-items-center">
      <h3 className="text-center font-weight-bold col-12">Add a new Book!</h3>
      <div className="text-left form-group col-4">
        <label className="font-weight-bold" htmlFor="title">
          Book Title<em>(5-30 characters)</em>
        </label>
        <input
          className="form-control"
          minLength="5"
          maxLength="50"
          type="text"
          required
          name="title"
          placeholder="e.g. Man's Search for Reason"
          onChange={onChangeTitle}
        ></input>
      </div>
      <div className="text-left form-group col-4">
        <label className="font-weight-bold" htmlFor="author">
          Book Author<em>(5-30 characters)</em>
        </label>
        <input
          minLength="5"
          maxLength="30"
          className="form-control"
          type="text"
          name="author"
          required
          placeholder="e.g. Viktor E. Frankl"
          onChange={onChangeAuthor}
        ></input>
      </div>
      <div className="text-left form-group col-2 mx-auto">
        <label className="font-weight-bold" htmlFor="pages">
          Pages
        </label>
        <input
          className="form-control"
          required
          type="number"
          placeholder="e.g. 123"
          min="0"
          max="10001"
          name="pages"
          onChange={onChangePages}
        ></input>
      </div>
      <div className="text-left form-group col-2">
        <label className="font-weight-bold" htmlFor="status">Status</label>
        <br />
        <select name="status" onChange={onChangeStatus} defaultValue="unread">
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
      </div>
      <div className="form-group text-center col-12">
        <button className="btn btn-outline-white btn-dark" type="submit">
          Add Book
        </button>
      </div>
    </form>
  );
}
