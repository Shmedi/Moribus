import React, { Component } from "react";
import NavBar from "./NavBar";
import firebase from "./firebase";
import axios from "axios";


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
        console.log(event.target.value);
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

        return (
            <div className="productDetails">

                {this.state.filteredMakeupItems.map((product) => {
                    return (
                        <div className="gridDetails">


                            <h2>{product.name}</h2>
                            <p className="productPrice">{product.price}</p>
                            <img src={product.image_link} alt="" />
                            <p className="productLink">{product.product_link}</p>
                            <p className="productDescription">{product.description}</p>
                            <p className="productType">{product.product_type}</p>
                            <p className="productTag">{product.tag_list[0]}</p>

                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Shop;
