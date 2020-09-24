import React, { useState } from "react";
import axios from "axios";

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

    axios
      .post("http://localhost:5000/books/add", book)
      .then((res) => {
        console.log(res.data);
        window.location = "/";
      })
      .catch((err) => console.log(err.response.data));
  }

  return (
    <form onSubmit={onSubmit} className="row flex-wrap w-50 mx-auto p-3">
      <h3 className="text-center font-weight-bold col-12">Add a new Book!</h3>
      <div className="form-group col-6">
        <label htmlFor="title">
          Book Title<em>(5-30 characters long)</em>
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
      <div className="form-group col-6">
        <label htmlFor="author">
          Book Author<em>(5-30 characters long)</em>
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
      <div className="form-group col-4 mx-auto">
        <label htmlFor="pages">
          No. of Pages<em>(1-10000)</em>
        </label>
        <input
          className="form-control"
          required
          type="number"
          min="0"
          max="10001"
          name="pages"
          onChange={onChangePages}
        ></input>
      </div>
      <div className="form-group col-12">
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
