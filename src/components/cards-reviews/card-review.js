import React from "react";
import "./card-review.css";
import StarIcon from "../../images/icon-star.svg";
function CardReview(props) {
  return (
    <div className="card__review__container">
      <div className="card__review-stars">
        <img src={StarIcon} alt="star-icon" />
        <img src={StarIcon} alt="star-icon" />
        <img src={StarIcon} alt="star-icon" />
        <img src={StarIcon} alt="star-icon" />
        <img src={StarIcon} alt="star-icon" />
      </div>
      <h1 className="card_review-text">{props.text}</h1>
    </div>
  );
}

export default CardReview;
