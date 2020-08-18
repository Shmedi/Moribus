import React, { Component } from "react";
import DemoCarousel from "./Carousel";
import NavBar from "./NavBar";
import Shop from "./Shop";
import firebase from "./firebase";
import axios from "axios";
import Catalogue from './Catalogue';
import MakeupDetails from './MakeupDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header>
            <NavBar />
            <Route path="/#" component={NavBar} />
            
          </header>
          <DemoCarousel />
          <Route path="/shop" component={Shop} />



          <Route exact path="/" component={ Catalogue } />
          <Route exact path="/MakeupDetails/:makeupId" component={ MakeupDetails } /> 


            <footer> 
              <div>
                <p>Copyright &copy; 2020 Moribus</p>
                <p>Created @ <a href="https://junocollege.com/" target="_blank">Juno College</a></p> 
              </div>
          </footer>
        </div>
      </Router> 
    );
  }
}

export default App;
