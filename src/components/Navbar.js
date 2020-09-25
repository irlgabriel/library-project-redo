import React, { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {

  // ComponentDidMount
  useEffect(() => {
    
  }, [])

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-link">
            My Library
          </Link>
          
          <Link to="/login" className={`nav-link ${props.user ? "hide" : ""}`}>
            Login
          </Link>
          <Link to="/logout" className={`nav-link ${props.user ? "" : "hide"}`}>
            Logout
          </Link>
          <Link to="/sign-up" className={`nav-link ${props.user ? "hide" : ""}`}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
