import React, { Component } from "react";
import DemoCarousel from "./Carousel";
import NavBar from "./NavBar";
import Shop from "./Shop";
import firebase from "./firebase";
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {


  render() {
    return (
      <div className="App wrapper">
        <Router>
          <header>
            <NavBar />
            <Route path="/#" component={NavBar} />
            
          </header>
          <DemoCarousel />
          <Route path="/shop" component={Shop} />

        </Router>


      </div>
    );
  }
}

export default App;
