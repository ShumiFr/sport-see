import React from "react";
import "../styles/components/header.css";

const Header = (props) => {
  return (
    <header className="header">
      <h1>
        Bonjour <strong>{props.name}</strong>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};

export default Header;
