import React, { Component } from "react";
import DemoCarousel from "./Carousel";
import NavBar from "./NavBar";
// import Shop from "./Shop";
import Catalogue from "./Catalogue";
import MakeupDetails from "./MakeupDetails";
import Footer from "./Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="headerMain">
            <div className="wrapper">
              <NavBar />
              {/* <Route path="/" component={NavBar} /> */}
              <div className="banner">
                <DemoCarousel />
              </div>
            </div>
          </header>
          {/* <Route path="/shop" component={Shop} /> */}

          <Route exact path="/catalogue" component={Catalogue} />
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
