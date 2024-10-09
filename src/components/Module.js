import React from "react";

const Module = ({ iconName }) => {
  return (
    <div className="module">
      <img src={iconName} alt={`Icone ${iconName}`} className="module__image" />
    </div>
  );
};

export default Module;
