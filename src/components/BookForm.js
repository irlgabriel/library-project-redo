import React from "react";

function BookForm(props) {
  function submitHandler(e) {
    e.preventDefault()
    const form = e.target.parentElement;
    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;
    props.setBooks([...props.books, {title, author, pages}])
  }

  return(
    <form>
      <div className="form-group">
        <label for="title">Book Title</label>
        <input placeholder="e.g. 'Man's Search For Reason'" type="text" name="title"></input>
      </div>
      <div className="form-group">
        <label for="author">Book Author</label>
        <input placeholder="e.g. 'Viktor E. Frankl'" type="text" name="author"></input>
      </div>
      <div className="form-group">
       <label for="pages">Number of Pages</label>
        <input placeholder="e.g. '693'"min="0" type="number" name="pages"></input>
      </div>
      <button onClick={submitHandler} type="submit">Add Book</button>
    </form>
  )
}

export default BookForm;
