import React from "react";
import axios from "axios";

export default class CreateBook extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangePages = this.onChangePages.bind(this);

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

  onSubmit(e) {
    e.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      pages: this.state.pages,
    };

    axios
      .post("http://localhost:5000/books/add", book)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="w-25 mx-auto p-3 bg-light">
        <h3 className="text-center font-weight-bold">Add a new Book!</h3>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="title"
            onChange={this.onChangeTitle}
            placeholder="Book title.."
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="author"
            onChange={this.onChangeAuthor}
            placeholder="Book author.."
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="number"
            name="pages"
            onChange={this.onChangePages}
            placeholder="Number of pages(1-10000)"
          ></input>
        </div>
        <div className="form-group">
          <button className="btn btn-outline-white btn-success" type="submit">
            Add Book
          </button>
        </div>
      </form>
    );
  }
}
