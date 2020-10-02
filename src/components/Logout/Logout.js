import React from "react"
import { useHistory } from "react-router-dom"
import firebase from "firebase";

export default function Logout() {
  const history = useHistory()
  
  firebase.auth().signOut()
  .then(() => {
    console.log("User successfully Signed out")
    history.push("/login");
  })
  .catch(err => console.log(err.message))

  return (
    <></>  
  )
}