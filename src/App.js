import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles, { MainContainer } from "./globalStyles";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth"

// Import components
import { Navbar } from "./components";
import { Library } from "./components";
import { LoginForm } from "./components";
import { Footer } from "./components";
import { SignUpForm } from "./components";
import { Logout } from "./components"
import { Profile } from "./components"

const firebaseConfig = {
  apiKey: "AIzaSyDGfkgO__SMjKni5qL8G4Pku1XT5khByfs",
  authDomain: "javascript-book-library.firebaseapp.com",
  databaseURL: "https://javascript-book-library.firebaseio.com",
  projectId: "javascript-book-library",
  storageBucket: "javascript-book-library.appspot.com",
  messagingSenderId: "517788260684",
  appId: "1:517788260684:web:2073e5778ecce98401d7e9",
  measurementId: "G-S8CBW08016",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth)
  const [books, setBooks] = useState([]);
  if(books.length === 0) {
  firebase.firestore().collection(`Books${user ? user.uid : ""}`).get()
    .then(snap => {
      setBooks(snap.docs.map(obj => obj.data()));
    })
  }
  
  return (
    <Router>
      <MainContainer>
        <GlobalStyles />
        <Navbar user={user} />
        <Route path="/" exact render={() => (<Library user={user} setBooks={setBooks} books={books}/>)}/>
        <Route path="/login" component={LoginForm} />
        <Route path="/sign-up" component={SignUpForm} />
        <Route path="/logout" component={Logout} />
        <Route path="/profile" render={() => (<Profile user={user}/>)}/>
        <Footer />
      </MainContainer>
    </Router>
  );
}

export default App;
