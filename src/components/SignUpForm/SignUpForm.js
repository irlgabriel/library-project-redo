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

export default function SignUpUser() {
  function submitHandler(e) {
    e.preventDefault();
    const auth = firebase.auth();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirmation = e.target.password_confirmation.value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

function validatePasswords(e) {
  const form = e.target.parentElement.parentElement
  const password = form.password.value
  const confirmation = form.password_confirmation.value
  const submit = form.querySelector("button");
  if(password !== confirmation) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
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
          onChange={validatePasswords} 
          placeholder="********"
          required
          minLength="6"
          type="password"
          name="password"
        ></FormInput>
      </FormGroup>
      <FormGroup>
       <FormLabel htmlFor="password_confirmation">Password Confirmation</FormLabel>
        <FormInput
          onChange={validatePasswords} 
          placeholder="********"
          required
          minLength="6"
          type="password"
          name="password_confirmation"
        ></FormInput>
      </FormGroup>
      <FormGroup>
        <Button type="submit">Sign Up</Button>
      </FormGroup>
    </Form>
  );
}
