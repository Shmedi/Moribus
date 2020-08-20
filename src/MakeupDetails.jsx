import React, { Component } from "react";
import axios from "axios";
import ReviewForm from "./ReviewForm";
import { Link } from "react-router-dom";

class MakeupDetails extends Component {
  constructor() {
    super();
    this.state = {
      makeupItem: {},
      makeupId: 0,
      makeupItemColours: [],
      showColours: false,
    };
  }

  componentDidMount() {
    const { makeupId } = this.props.match.params;
    axios({
      url: `https://makeup-api.herokuapp.com/api/v1/products/${makeupId}.json`,
      method: "GET",
    }).then((res) => {
      this.setState({
        makeupItem: res.data,
        makeupId: makeupId,
        makeupItemColours: res.data.product_colors,
      });

      //(e.g. price, link to purchase, color values, photo, original rating, would repurchase/wouldn’t repurchase rating)
    });
  }

  displayColours = (event) => {
    event.preventDefault();
    this.setState(
      {
        showColours: true,
      },
      () => {
        document.addEventListener("click", this.hideColours);
      }
    );
  };
  // This function is setting the state of showColours to false on click; this will remove the colour names
  hideColours = () => {
    this.setState(
      {
        showColours: false,
      },
      () => {
        document.removeEventListener("click", this.hideColours);
      }
    );
  };

  render() {
    const {
      image_link,
      name,
      price_sign,
      price,
      currency,
      description,
    } = this.state.makeupItem;
    return (
      <div className="moreInfo wrapper">
        <div className="contentContainer">
          <div className="image">
            <img src={image_link} alt={name} />
          </div>

          <div className="textContainer">
            <h1>{name}</h1>
            <div className="priceContainer">
              <h2>{price_sign}</h2>
              <h2>{price}</h2>
              <h2>{currency}</h2>
            </div>
            <p>{description}</p>
            <button className="colourButton" onClick={this.displayColours}>
              See available colours
            </button>
            <div className="colourMenuContainer">
              {/* A ternary condition that checks the state of showColours. The button above toggles the state from true to false. When true it will show the colour names of the makeupItem and on false it will remove the items from the screen */}
              {this.state.showColours
                ? this.state.makeupItemColours.map((color) => {
                    return (
                      <div className="swatch">
                        <ul>
                          <li>
                            <span>{color.colour_name}</span>
                          </li>
                        </ul>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <div className="bottomContainer">
          <ReviewForm itemId={this.state.makeupId} />
          <Link to={"/"}>
            <button className="anotherItem" onClick={this.backButton}>
              Search another item
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MakeupDetails;
