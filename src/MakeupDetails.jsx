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
    };
  }

  componentDidMount() {
    const { makeupId } = this.props.match.params;
    console.log(makeupId);
    axios({
      url: `http://makeup-api.herokuapp.com/api/v1/products/${makeupId}.json`,
      method: "GET",
    }).then((res) => {
      console.log(res.data);
      this.setState({
        makeupItem: res.data,
        makeupId: makeupId,
      });

      //(e.g. price, link to purchase, color values, photo, original rating, would repurchase/wouldn’t repurchase rating)
      // console.log(makeupArray);
    });
  }

  render() {
    const {
      image_link,
      name,
      price_sign,
      price,
      currency,
      description,
    } = this.state.makeupItem;
    console.log(this.props);
    return (
      <div className="moreInfo">
        <div className="image">
          <img src={image_link} />
        </div>

        <div className="description">
          <h1>{name}</h1>
          <h2>{(price_sign, price, currency)}</h2>
          <p>{description}</p>
        </div>

        <ReviewForm itemId={this.state.makeupId} />
        <Link to={"/"}>
          <button onClick={this.backButton}>Search another item</button>
        </Link>
      </div>
    );
  }
}

export default MakeupDetails;
