import React from "react";

const ReviewData = (props) => {
  return (
    <ul>
      {props.comments.map((review) => {
        return (
          <li key={review.id}>
            <h4>{review.name}</h4>
            <p>{review.value}</p>
          </li>
        );
      })}
    </ul>
  );
};

// Try routing the product Id using params in the app.js to this component. Or try render.

export default ReviewData;
