import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { BrowserRouter as Router, Route } from "react-router-dom";

class Catalogue extends Component {
  constructor() {
    super();
    this.state = {
      makeupItems: [],
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
      // console.log(res);
      const AllData = res.data;
      // console.log(AllData);
      this.setState({
        makeupItems: AllData,
      });
      // console.log(res.data[0].id);
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
    // console.log("filtered makeup", this.state.filteredMakeupItems);
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
                {/* <Route exact path="/Catalogue" component={Catalogue} /> */}
                {/* <p>{product.price_sign} {product.price} {product.currency}</p>
                  <p>{product.product_link}</p>
                  <p>{product.description}</p> */}
                {/* backToCatalogue={() => this.backToCatalogue()} */}
                {/* {this.state.back 
                  ? <MakeupDetails backButton={ () => this.backButton() }/> 
                  : <Catalogue backButton={ () => this.backButton() }/> 
                } */}
                {/* <p>{product.product_type}</p> */}
                {/* <p>{product.tag_list[0]}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Catalogue;
