import React, { useEffect } from "react"
import firebase from "firebase"

export default function LogOutUser() {
  useEffect(() => {
    console.log(firebase.auth().currentUser)
    firebase.auth().signOut()
      .then(() => {
        console.log(firebase.auth.currentUser)
        window.location('/');
      })
      .catch((err) => console.log(err.message))
  }, [])
  return(
    <div>
      <p>I hate firebase auth!</p>
    </div>
  )
}