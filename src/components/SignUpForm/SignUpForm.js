import React from "react";
import firebase from "firebase";

export default function SignUpUser() {
  function submitHandler(e) {
    e.preventDefault();
    const auth = firebase.auth();
    const email = e.target.email.value;
    const password = e.target.password.value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            required
            minLength="6"
            type="email"
            name="email"
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="********"
            required
            minLength="6"
            type="password"
            name="password"
          ></input>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
