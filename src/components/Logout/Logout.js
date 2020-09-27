import React, { useEffect } from "react"
import firebase from "firebase";
export default function Logout() {

  useEffect(() => {
    firebase.auth().signOut()
    .then(() => {
      console.log("User successfully Signed out")
      window.location = "/";
    })
    
    .catch(err => console.log(err.message))
  }, []);

  return (
    <></>  
  )
}