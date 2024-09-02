import React from 'react';
import './ReviewCard.css';

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h4 className="reviewer-name">{review.reviewer}</h4>
      <p className="review-rating">Rating: {review.rating} ★</p>
      <p className="review-comment">{review.comment}</p>
    </div>
  );
}

export default ReviewCard;
