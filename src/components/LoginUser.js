import React from "react";

export default function LogInUser() {

  function submitHandler(e) {
    e.preventDefault()
  }

  return (
    <div id="login-user-form" className="w-50 mx-auto text-center">
      <h1 className="text-center">Log in</h1>
      <form className="mx-auto" onSubmit={submitHandler}>
        <div className="form-group text-left">
          <label className="font-weight-bold" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
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