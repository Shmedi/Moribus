import React, { Component } from "react";
import firebase from "./firebase";
import axios from "axios";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';


class Shop extends Component {
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

    axios({
      url: "http://makeup-api.herokuapp.com/api/v1/products.json",
      method: "GET",
      dataType: "json",
      params: {
        product_tags: "Vegan",
        product_type: this.state.itemSearch,
      },
    }).then((res) => {
      this.setState({
        makeupItems: res.data,
      });
      //(e.g. price, link to purchase, color values, photo, original rating, would repurchase/wouldn’t repurchase rating)
      // console.log(makeupArray);
    });
  }

  inputSearch = (event) => {
    event.preventDefault();
    this.setState({
      itemSearch: event.target.value,
    });

  };

  handleClick = (event) => {
    event.preventDefault();

    const filteredData = this.state.makeupItems.filter((items) => {
      return items.product_type == this.state.itemSearch;
    });
    this.setState({
      filteredMakeupItems: filteredData,
    });
  };

  render() {
    console.log("Rendering...");
    return (
      <div className="shopSearch">

        <form action="">
          <label htmlFor="item" className="sr-only">Enter in a product name</label>
          <br />
          <input
            onChange={this.inputSearch}
            type="textarea"
            id="item"
            value={this.state.itemSearch} placeholder="Enter Product Name Here"
          />
          <br />

          <button onClick={this.handleClick}>Search</button>
        </form>
        {this.state.filteredMakeupItems.map((product) => {
          return (
            <div className="gridProducts">
              <span className="productsFound" key={product.id}>
                <div className="column1">
                  <h2>{product.name}</h2>
                  <p className="productPrice">${product.price}</p>
                  <img src={product.image_link} alt={product.name} />
                </div>
                <div className="column2">
                  <p className="productLink"><a href={product.product_link}>{product.product_link}</a></p>
                  <p className="productDescription">{product.description}</p>
                  <p className="productType">{product.product_type}</p>
                  <p className="productTag">{product.tag_list[0]}</p>

                </div>

              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Shop;
