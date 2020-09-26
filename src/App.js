import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";

// Import components
import Navbar from "./components/Navbar";
import Library from "./components/Library";
import LogInUser from "./components/LoginUser";
import Footer from "./components/Footer";
import SignInUser from "./components/SignUpUser";
import LogOutUser from "./components/LogOutUser";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <Router>
      <div className="container-fluid" id="main-container">
        <Navbar user={user} />
        <br />
        <Route path="/" exact component={() => <Library user={user} />} />
        <Route path="/login" component={LogInUser} />
        <Route path="/sign-up" component={SignInUser} />
        <Route path="/logout" component={LogOutUser} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
