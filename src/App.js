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
import { Profile } from "./components"

function App() {
  const [user, setUser] = useState(false);
  firebase.auth().onAuthStateChanged((user) => setUser(user));
  return (
    <MainContainer>
      <Router>
        <GlobalStyles />
        <Navbar user={user} />
        <Route path="/" exact render={(props) => (<Library user={user}/>)}/>
        <Route path="/login" component={LoginForm} />
        <Route path="/sign-up" component={SignUpForm} />
        <Route path="/logout" component={Logout} />
        <Route path="/profile" render={(props) => (<Profile user={user}/>)}/>
        <Footer />
      </Router>
    </MainContainer>
  );
}

export default App;
