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
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header>
            {/* <NavBar /> */}
            <div className="nav">
              <div className="wrapper">
                <Route path="/" component={NavBar} />
              </div>
            </div>
            <div className="banner wrapper">
              <Route exact path="/" component={DemoCarousel} />
              {/* <DemoCarousel /> */}
            </div>
          </header>
          {/* <Route path="/shop" component={Shop} /> */}

          <Route exact path="/" component={Catalogue} />
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
