import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles, { MainContainer } from "./globalStyles";
import firebase from "firebase";

// Import components
import { Navbar } from "./components";
import { Library } from "./components";
import { LoginForm } from "./components";
import { Footer } from "./components";
import { SignUpForm } from "./components";
import { Logout } from "./components"
import { Profile } from "./components"

function App() {
  const [user, setUser] = useState(undefined);
  const [books, setBooks] = useState([]);

  firebase.auth().onAuthStateChanged((currentUser) => {
    if(currentUser) {
      setUser(currentUser)
    }
  });

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
