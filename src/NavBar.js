import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    console.log("Rendering...");
    return (
      <div className="headerNav">
        <h1>Moribus</h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/`}>Wish List</Link>
            </li>
            <li>
              <Link to={`/`}>Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
