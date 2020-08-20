import React from "react";

const reviewData = (props) => {
  return (
    <ul className="review">
      {props.comments.map((review, index) => {
        if (review.id === props.productId) {
          return (
            <li className="reviewDataContent" key={index}>
              <div className="reviewedBy">
                <h4>Reviewed by:</h4>
                <h4>{review.name}</h4>
              </div>
              <div className="comment">
                <p>{review.value}</p>
              </div>
            </li>
          );
        } else return null;
      })}
    </ul>
  );
};
export default reviewData;
