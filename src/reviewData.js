import React from "react";

const reviewData = (props) => {
  return (
    <ul>
      {props.comments.map((review, index) => {
        if (review.id === props.productId) {
          return (
            <li key={index}>
              <h4>{review.name}</h4>
              <p>{review.value}</p>
            </li>
          );
        } else return null;
      })}
    </ul>
  );
};

export default reviewData;
