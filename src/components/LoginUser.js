import React from "react";
import axios from "axios";

export default function LoginUser() {

  function submitHandler(e) {
    e.preventDefault()
    
    const username = e.target.username;
    const password = e.target.password;
    const user = new Object(username, password);

    axios.post("http://localhost:5000/users/login", user)
      .then((res) => console.log("Logged in successfully"))
      .catch((err) => console.log(err))

  }

  return (
    <div id="login-user-form" className="w-50 mx-auto">
      <h1 className="text-center">Log in</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group text-left">
          <label className="font-weight-bold" htmlFor="username">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            required
            minLength="6"
          ></input>
        </div>
        <div className="form-group text-left">
          <label className="font-weight-bold" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="********"
            required
            minLength="6"
          ></input>
        </div>
        <div className="form-group mx-auto">
          <button className="btn btn-info">Login</button>
        </div>
      </form>
    </div>
  );
}
