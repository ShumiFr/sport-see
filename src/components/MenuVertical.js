import React from "react";
import Module from "./Module";
import yoga from "../assets/yoga.png";
import bike from "../assets/bike.png";
import swim from "../assets/swim.png";
import dumbell from "../assets/dumbell.png";
import "../styles/components/menu-vertical.css";

const MenuVertical = () => {
  return (
    <div className="menu-vertical">
      <div className="menu-vertical__list">
        <Module iconName={yoga} />
        <Module iconName={bike} />
        <Module iconName={swim} />
        <Module iconName={dumbell} />
      </div>
    </div>
  );
};

export default MenuVertical;
