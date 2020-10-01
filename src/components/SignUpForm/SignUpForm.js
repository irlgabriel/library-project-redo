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
  const auth = firebase.auth();
  
  function submitHandler(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(e.target.checkValidity()) {
      auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        window.location = "/";
      })
      .catch((err) => {
        
      });
    } else {
      e.target.reportValidity();
    }
  }

  function validatePasswords(e) {
    const form = e.target.parentElement.parentElement
    const password = form.password
    const confirmation = form.password_confirmation
    if(password.value !== confirmation.value) {
      password.setCustomValidity("Passwords do not match!")
      confirmation.setCustomValidity("Passwords do not match!")
    } else {
      password.setCustomValidity("");
      confirmation.setCustomValidity("");
    }
  }

  function validateEmail(e) {
    const email = e.target;

    auth.fetchSignInMethodsForEmail(email.value)
    .then(res => {
      if(res.length === 0) {
        email.setCustomValidity("");
      } else {
        email.setCustomValidity("Email Already in Use!")
      }
      email.reportValidity()
    })
  }


  return (
    <Form onSubmit={submitHandler}>
      <FormHeader>Sign Up</FormHeader>
      <FormGroup>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          onChange={validateEmail}
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
