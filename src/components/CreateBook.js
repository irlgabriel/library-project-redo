import React from "react";
import axios from "axios";

export default class CreateBook extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangePages = this.onChangePages.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this)

    this.state = {
      title: "",
      author: "",
      pages: "",
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }

  onChangePages(e) {
    this.setState({
      pages: e.target.value,
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      pages: this.state.pages,
      status: this.state.status,
    };

    // Validate form before submitting it to the database;

    axios
      .post("http://localhost:5000/books/add", book)
      .then((res) => {
        console.log(res.data)
        window.location = "/"
      })
      .catch((err) => {
        console.log(err)
      })

  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="row flex-wrap w-50 mx-auto p-3">
        <h3 className="text-center font-weight-bold col-12">Add a new Book!</h3>
        <div className="form-group col-6">
          <label htmlFor="title">Book Title<em>(5-30 characters long)</em></label>
          <input
            className="form-control"
            minLength="5"
            maxLength="50"
            type="text"
            required
            name="title"
            placeholder="e.g. Man's Search for Reason"
            onChange={this.onChangeTitle}
          ></input>
        </div>
        <div className="form-group col-6">
          <label htmlFor="author">Book Author<em>(5-30 characters long)</em></label>
          <input
            minLength="5"
            maxLength="30"
            className="form-control"
            type="text"
            name="author"
            required
            placeholder="e.g. Viktor E. Frankl"
            onChange={this.onChangeAuthor}
          ></input>
        </div>
        <div className="form-group col-4 mx-auto">
          <label htmlFor="pages">No. of Pages<em>(1-10000)</em></label>
          <input
            className="form-control"
            required
            type="number"
            min="0"
            max="10001"
            name="pages"
            onChange={this.onChangePages}
          ></input>
        </div>
        <div class="form-group col-12">
          <select onChange={this.onChangeStatus}>
            <option value="read" selected>Read</option>
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
}
