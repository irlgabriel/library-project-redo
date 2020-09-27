import React from "react";
import firebase from "firebase";
import {
  FormGroup,
  Form,
  FormHeader,
  FormLabel,
  FormInput,
} from "../Form/Form.elements";
import { Button } from "../../globalStyles";

export default function LogInUser() {
  function submitHandler(e) {
    e.preventDefault();
    console.log(e);
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
  );
}
