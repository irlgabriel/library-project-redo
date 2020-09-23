import React from "react";
import axios from "axios";

export default class Library extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      books: []
    })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/books/')
      .then(res => {
        this.setState({
          books: res.data
        });
      })
  }

  render() {
    return(
      <div className="library mx-auto w-100">
        <h3 className="text-center">Library</h3>
        {this.book}
      </div>
    )
  }
}
