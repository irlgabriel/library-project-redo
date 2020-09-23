import React from "react";

function BookForm() {
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
      <button type="submit">Add Book</button>
    </form>
  )
}

export default BookForm;
