import React from "react";
import "./card-user.css";
function CardUser(props) {
  return (
    <div className="card__user__container">
      <div className="card__user-top">
        <img className="card__user-img" src={props.image} alt="user" />
        <div className="card__user-info">
          <h2 className="card__user-name">{props.name}</h2>
          <h2 className="card__user-buyer">Verified Buyer</h2>
        </div>
      </div>
      <p className="card__user-text">{props.text}</p>
    </div>
  );
}

export default CardUser;
