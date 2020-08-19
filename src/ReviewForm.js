import React, { Component } from "react";
import firebase from "./firebase";
import ReviewData from "./reviewData";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      name: "",
      comment: "",
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      const firebaseData = snapshot.val();

      const userReview = [];

      for (const review in firebaseData) {
        userReview.push({
          id: firebaseData[review].id,
          name: firebaseData[review].name,
          value: firebaseData[review].comment,
        });
      }

      console.log(firebaseData);

      this.setState({
        reviews: userReview,
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    console.log(this.props);
    const dbRef = firebase.database().ref();

    if (this.state.name && this.state.comment > 0) {
      dbRef.push({
        id: this.props.itemId,
        name: this.state.name,
        comment: this.state.comment,
      });
      this.setState({
        name: "",
        comment: "",
      });
    } else {
      alert("Please fill all forms!");
    }
  };

  render() {
    return (
      <>
        <form action="">
          <div>
            <label htmlFor="userName">Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="userName"
              value={this.state.name}
              maxLength="15"
              placeholder="Name"
              name="name"
            />
          </div>

          <div>
            <label htmlFor="comment">Comment</label>
            <textarea
              onChange={this.handleChange}
              name="comment"
              id="comment"
              value={this.state.comment}
              placeholder="Write your review..."
              maxLength="300"
            ></textarea>
          </div>

          <button onClick={this.handleClick}>Submit</button>
        </form>

        <ReviewData
          comments={this.state.reviews}
          productId={this.props.itemId}
        />
      </>
    );
  }
}

export default ReviewForm;
