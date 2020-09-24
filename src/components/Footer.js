import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark">
        <h3>
          This project was built using <a href="https://reactjs.org/">React</a>.
        </h3>
        <a href="https://github.com/irlgabriel">Github</a>
      </footer>
    );
  }
}
