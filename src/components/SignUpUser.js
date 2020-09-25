import React from "react"
import firebase from "firebase"

export default function SignUpUser() {
  function submitHandler(e) {
    e.preventDefault()
    const auth = firebase.auth();
    const email = e.target.email.value;
    const password = e.target.password.value;

    auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user)
      })
      .catch((err) => {
        console.log(err.message)
      })


  }
  return (
    <div className="sign-up  mx-auto w-50">
      <h1 className="text-center w-100">Sign Up</h1>
      <form className="mx-auto" onSubmit={submitHandler}>
        <div className="text-left font-weight-bold form-group">
          <label htmlFor="email">Email</label>
          <input placeholder="Email" required minLength="6" type="email" name="email" className="form-control"></input>
        </div>
        <div className="text-left font-weight-bold form-group">
          <label htmlFor="password">Password</label>
          <input placeholder="********" required minLength="6" type="password" name="password" className="form-control"></input>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-info">Sign Up</button>
        </div>
      </form>
    </div>
  )
}