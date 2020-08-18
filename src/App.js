import React, { Component } from "react";
import NavBar from "./NavBar";
import Shop from "./Shop";
import ProductDetails from "./ProductDetails";
import firebase from "./firebase";
import axios from "axios";
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {


  render() {
    console.log("Rendering...");
    return (
      <div className="App wrapper">
        <Router>
          <NavBar />
          <Route path="/#" component={NavBar} />
          <Route path="/shop" component={Shop} />
          <Route path="/productdetails/productID" component={ProductDetails} />
        </Router>


      </div>
    );
  }
}

export default App;
