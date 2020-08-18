import React, { Component } from "react";
import firebase from "./firebase";
import axios from "axios";
import Catalogue from './Catalogue';
import MakeupDetails from './MakeupDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       makeupItems: [],
//       itemSearch: "",
//       filteredMakeupItems: [],
//     };
//   }

//   componentDidMount() {
//     console.log("Mounted");

//     axios({
//       url: "http://makeup-api.herokuapp.com/api/v1/products.json",
//       method: "GET",
//       dataType: "json",
//       params: {
//         product_tags: "Vegan",
//         product_type: this.state.itemSearch,
//       },
//     }).then((res) => {
//       console.log(res.data)
//       this.setState({
//         makeupItems: res.data,
//       });
//       //(e.g. price, link to purchase, color values, photo, original rating, would repurchase/wouldn’t repurchase rating)
//       // console.log(makeupArray);
//     });
//   }

//   inputSearch = (event) => {
//     event.preventDefault();
//     this.setState({
//       itemSearch: event.target.value,
//     });
//   };

//   handleClick = (event) => {
//     event.preventDefault();

//     const filteredData = this.state.makeupItems.filter((items) => {
//       return items.product_type == this.state.itemSearch;
//     });
//     this.setState({
//       filteredMakeupItems: filteredData
//     });
//   };


  render() {
    console.log("Rendering...");
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Moribus</h1>
          </header>

          <Catalogue />
          <Route exact path="/catalogue" component={ Catalogue } />
          <Route path="/MakeupDetails/:makeupId" component={ MakeupDetails } /> 

        </div>
      </Router> 
    );
  }
}

export default App;
