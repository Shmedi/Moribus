import React, { Component } from 'react';
import axios from 'axios';

class MakeupDetails extends Component {
  constructor(){
    super();
    this.state = {
      makeupItem: {}
    }
  }

  componentDidMount() {
    console.log("Mounted");

    axios({
      url: `http://makeup-api.herokuapp.com/api/v1/makeupItem/${this.props.match.params.makeupId}`,
      method: "GET",
      dataType: "json",
      params: {
        product_tags: "Vegan",
        product_type: this.state.itemSearch,
      },
    }).then((res) => {
      console.log(res.data)
      this.setState({
        makeupItem: res.data,
      });
    
      //(e.g. price, link to purchase, color values, photo, original rating, would repurchase/wouldn’t repurchase rating)
      // console.log(makeupArray);
    });
  }

  render() {
    const {image_link, name, price_sign, price, currency, description } = this.state.makeupItem;
    console.log(this.props)
    return(
      <div className="moreInfo">
        <div className="image">
          <img src={image_link}/>
        </div>

        <div className="description">
          <h1>{name}</h1>
          <h2>{price_sign, price, currency}</h2>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default MakeupDetails;