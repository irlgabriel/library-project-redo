import React from "react";
import firebase from "firebase";

export default function LogInUser() {
  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location = "/";
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id="login-user-form">
      <h1>Log in</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            minLength="6"
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            required
            minLength="6"
          ></input>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
