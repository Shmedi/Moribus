import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            makeupItems: [],
            itemSearch: "",
            filteredMakeupItems: [],
        };

    }



    componentDidMount() {
        console.log("Mounted");
    }

    render() {
        console.log("Rendering...");
        return (
            <React.Fragment>
                <div className="headerNav">
                    <nav className="navbar">
                        <Link to={`/#`}><h1>Moribus</h1></Link>

                        <ul>

                            <li>
                                <Link to={`/shop`}>Shop</Link>
                            </li>
                            <li>
                                <Link to={`/#`}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="cart">
                        <Link to={`/#`}>Cart</Link>
                    </nav>
                </div>

            </React.Fragment>
        );
    }
}

export default NavBar;
