import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./globalStyles"

// Import components
import Navbar from "./components/Navbar/Navbar";
import Library from "./components/Library/Library";
import LogInUser from "./components/LoginForm/LoginForm";
import Footer from "./components/Footer/Footer";
import SignInUser from "./components/SignUpForm/SignUpForm";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Route path="/" exact component={Library} />
      <Route path="/login" component={LogInUser} />
      <Route path="/sign-up" component={SignInUser} />
      <Footer />
    </Router>
  );
}

export default App;
