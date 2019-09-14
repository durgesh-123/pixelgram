import React from "react";

const Card = props => (
  <div className="card">
    <img src={props.imgSrc} />
    <h4>{props.name}</h4>
  </div>
);

export default Card;
