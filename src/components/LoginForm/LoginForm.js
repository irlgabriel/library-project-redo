import React from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import {
  FormGroup,
  Form,
  FormHeader,
  FormLabel,
  FormInput,
} from "../Form/Form.elements";
import { Button, Container } from "../../globalStyles";

export default function LogInUser() {
  const history = useHistory();

  const auth = firebase.auth();

  function googleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((user) => {
        history.push("/profile");
      })
      .catch((err) => console.log(err.message));
  }

  function submitHandler(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/profile");
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <FormHeader>Log in</FormHeader>
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            required
            minLength="6"
          ></FormInput>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            placeholder="********"
            required
            minLength="6"
          ></FormInput>
        </FormGroup>
        <FormGroup>
          <Button type="submit">Login</Button>
        </FormGroup>
      </Form>
      <FormGroup>
        <Button onClick={googleLogin}>Login with Google</Button>
      </FormGroup>
    </Container>
  );
}
