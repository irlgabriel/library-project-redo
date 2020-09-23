import React from "react";

function BookForm(props) {
  function submitHandler(e) {
    e.preventDefault()
    const form = e.target.parentElement;
    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;
    //const readStatus = document.querySelector('.read-status').value
    props.setBooks([...props.books, {id: Math.random(10), readStatus: "read", title, author, pages, }])
  }

  return(
    <form>
      <div className="form-group">
        <label htmlFor="title">Book Title</label>
        <input placeholder="e.g. 'Man's Search For Reason'" type="text" name="title"></input>
      </div>
      <div className="form-group">
        <label htmlFor="author">Book Author</label>
        <input placeholder="e.g. 'Viktor E. Frankl'" type="text" name="author"></input>
      </div>
      <div className="form-group">
       <label htmlFor="pages">Number of Pages</label>
        <input placeholder="e.g. '693'"min="0" type="number" name="pages"></input>
      </div>
      <div className="form-group">
        <select id="read-status">
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
      </div>
      <button onClick={submitHandler} type="submit">Add Book</button>
    </form>
  )
}

export default BookForm;
