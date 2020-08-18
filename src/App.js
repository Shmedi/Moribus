import React, { Component } from "react";
import Catalogue from "./Catalogue";
import MakeupDetails from "./MakeupDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    console.log("Rendering...");
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Moribus</h1>
          </header>

          <Route exact path="/" component={Catalogue} />
          <Route
            exact
            path="/MakeupDetails/:makeupId"
            component={MakeupDetails}
          />
        </div>
      </Router>
    );
  }
}

export default App;
