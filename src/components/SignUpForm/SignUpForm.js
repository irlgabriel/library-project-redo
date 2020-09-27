import React from "react";
import firebase from "firebase";
import {
  FormGroup,
  Form,
  FormHeader,
  FormLabel,
  FormInput,
} from "../Form/Form.elements";
import { Button } from "../../globalStyles"

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
    <Form onSubmit={submitHandler}>
      <FormHeader>Sign Up</FormHeader>
      <FormGroup>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          placeholder="Email"
          required
          minLength="6"
          type="email"
          name="email"
        ></FormInput>
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput
          placeholder="********"
          required
          minLength="6"
          type="password"
          name="password"
        ></FormInput>
      </FormGroup>
      <FormGroup>
        <Button type="submit">Sign Up</Button>
      </FormGroup>
    </Form>
  );
}
