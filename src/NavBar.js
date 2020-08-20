import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="headerNav">
        <h1 className="expand">Moribus</h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link className="navLinks" to={`/`}>
                <span>Home</span>
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
