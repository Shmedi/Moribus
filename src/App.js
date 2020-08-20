import React, { Component } from "react";
import DemoCarousel from "./Carousel";
import NavBar from "./NavBar";
import Catalogue from "./Catalogue";
import MakeupDetails from "./MakeupDetails";
import Footer from "./Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header>
            <div className="nav">
              <div className="wrapper">
                <NavBar />
              </div>
            </div>
          </header>
          <Route exact path="/">
            <div className="banner wrapper">
              <DemoCarousel />
            </div>
            <Catalogue />
          </Route>
          <Route
            exact
            path="/MakeupDetails/:makeupId"
            component={MakeupDetails}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
