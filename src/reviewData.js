import React from "react";

const ReviewData = (props) => {
  return (
    <ul>
      {props.comments.map((review) => {
        if (review.id === props.productId) {
          return (
            <li key={props.productId}>
              <h4>{review.name}</h4>
              <p>{review.value}</p>
            </li>
          );
        } else return;
      })}
    </ul>
  );
};

export default ReviewData;
