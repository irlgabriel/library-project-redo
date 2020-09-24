import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import Navbar from "./components/Navbar";
import Library from "./components/Library";
import CreateBook from "./components/CreateBook";
import EditBook from "./components/EditBook";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="container-fluid" id="main-container">
        <Navbar />
        <br />
        <Route path="/" exact component={Library} />
        <Route path="/create" component={CreateBook} />
        <Route path="/edit/:id" component={EditBook} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
