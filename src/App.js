import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles, { MainContainer } from "./globalStyles";
import firebase from "firebase";

// Import components
import { Navbar } from "./components";
import { Library } from "./components";
import { LoginForm } from "./components";
import { Footer } from "./components";
import { SignUpForm } from "./components";
import { Logout } from "./components";

function App() {
  const [user, setUser] = useState(false);
  firebase.auth().onAuthStateChanged((user) => setUser(user));
  return (
    <MainContainer>
      <Router>
        <GlobalStyles />
        <Navbar user={user} />
        <Route path="/" exact component={Library} />
        <Route path="/login" component={LoginForm} />
        <Route path="/sign-up" component={SignUpForm} />
        <Route path="/logout" component={Logout} />
        <Footer />
      </Router>
    </MainContainer>
  );
}

export default App;
