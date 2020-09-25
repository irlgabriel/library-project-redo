import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


// Import components
import Navbar from "./components/Navbar";
import Library from "./components/Library";
import EditBook from "./components/EditBook";
import LogInUser from "./components/LoginUser";
import Footer from "./components/Footer"
import SignInUser from "./components/SignUpUser"
import LogOutUser from "./components/LogOutUser"

function App() {
  const [user, setUser] = useState("undefined")

  return (
    <Router>
      <div className="container-fluid" id="main-container">
        <Navbar user={user}/>
        <br />
        <Route path="/" exact component={Library} />
        <Route path="/edit/:id" component={EditBook} />
        <Route path="/login" component={LogInUser} />
        <Route path="/sign-up" component={SignInUser} />
        <Route path="/logout" component={LogOutUser} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
