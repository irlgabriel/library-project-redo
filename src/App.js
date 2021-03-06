import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import GlobalStyles, { MainContainer, Image, ImageOverlay } from "./globalStyles";
import firebase from "firebase";

// Firebase Hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Import components
import { Navbar } from "./components";
import { Library } from "./components";
import { LoginForm } from "./components";
import { Footer } from "./components";
import { SignUpForm } from "./components";
import { Logout } from "./components";
import { Profile } from "./components";

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
const db = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  const bookCollection = db.collection(`Books${user ? user.uid : ""}`);
  const [value, loading, error] = useCollectionData(bookCollection);
  const [books, setBooks] = useState([]);

  if (value) {
    if (books !== value) setBooks(value);
  }
  return (
    <HashRouter basename="/">
      <MainContainer>
        <Image />
        <ImageOverlay />
        <GlobalStyles />
        <Navbar user={user} />
        <Route
          path="/"
          exact
          render={() => (
            <Library user={user} setBooks={setBooks} books={books} />
          )}
        />
        <Route path="/login" render={() => <LoginForm />} />
        <Route path="/sign-up" component={SignUpForm} />
        <Route path="/logout" component={Logout} />
        <Route
          path="/profile"
          render={() => <Profile books={books} user={user} />}
        />
        <Footer />
      </MainContainer>
    </HashRouter>
  );
}

export default App;
