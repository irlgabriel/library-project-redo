import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles, { MainContainer } from "./globalStyles";

// Import components
import { Navbar } from "./components";
import { Library } from "./components";
import { LoginForm } from "./components";
import { Footer } from "./components";
import { SignUpForm } from "./components";

function App() {
  return (
    <MainContainer>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Route path="/" exact component={Library} />
        <Route path="/login" component={LoginForm} />
        <Route path="/sign-up" component={SignUpForm} />
        <Footer />
      </Router>
    </MainContainer>
  );
}

export default App;
