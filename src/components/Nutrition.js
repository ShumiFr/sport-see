import React from "react";

const Nutrition = (props) => {
  return (
    <div className="nutrition">
      <div className="nutrition__image">
        <img src={props.image} alt={props.name}></img>
      </div>
      <div className="nutrition__info">
        <p className="nutrition__number">{props.number}</p>
        <p className="nutrition__name">{props.name}</p>
      </div>
    </div>
  );
};

export default Nutrition;
