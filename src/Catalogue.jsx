import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Catalogue extends Component {
  constructor() {
    super();
    this.state = {
      makeupItems: [],
      filteredMakeupItems: [],
    };
  }

  componentDidMount() {
    axios({
      url: "https://makeup-api.herokuapp.com/api/v1/products.json",
      method: "GET",
      dataType: "json",
      params: {
        product_tags: "Vegan",
        product_type: this.state.itemSearch,
      },
    }).then((res) => {
      const AllData = res.data;
      this.setState({
        makeupItems: AllData,
      });
      //(e.g. price, link to purchase, color values, photo, original rating, would repurchase/wouldn’t repurchase rating)
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
    if (this.state.itemSearch === "") {
      alert("Please enter a product");
    } else {
      const productName = this.state.itemSearch;
      const lowercase = productName.toLowerCase();
      const finalSearch = lowercase.replace(/\s/g, "_");
      const filteredData = this.state.makeupItems.filter((items) => {
        return items.product_type === finalSearch;
      });
      if (filteredData.length > 0) {
        this.setState({
          filteredMakeupItems: filteredData,
          itemSearch: "",
        });
      } else {
        alert("Product not found. Please try again");
      }
    }
  };

  render() {
    return (
      <div className="allItems wrapper">
        <form className="shopSearch" action="">
          <label htmlFor="item">Enter in a product name</label>
          <input
            onChange={this.inputSearch}
            type="textarea"
            id="item"
            value={this.state.itemSearch}
          />
          <button onClick={this.handleClick}>Search</button>
        </form>
        <div className="makeup">
          {this.state.filteredMakeupItems.map((product) => {
            return (
              <div className="productPage">
                <div className="productItem">
                  <h2>{product.name}</h2>
                  <Link to={`/makeupDetails/${product.id}`}>
                    <img src={product.image_link} alt={`${product.name}`} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Catalogue;
