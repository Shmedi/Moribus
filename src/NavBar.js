import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="headerNav">
        <div className="titleContainer expand">
          <h1>Moribus</h1>
          <p>Vegan Make-up</p>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link className="navLinks" to={`/`}>
                <span className="highlight">Home</span>
              </Link>
            </li>
            <li>
              <Link className="navLinks" to={`/`}>
                Wish List
              </Link>
            </li>
            <li>
              <Link className="navLinks" to={`/`}>
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
