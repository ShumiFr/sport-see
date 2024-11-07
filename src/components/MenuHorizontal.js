import React from "react";
import "../styles/components/menu-horizontal.css";
import Logo from "../assets/logo.png";

const MenuHorizontal = () => {
  return (
    <div className="menu-horizontal">
      <img src={Logo} alt="Logo SportSee" className="menu-horizontal__logo" />
      <nav className="menu-horizontal__nav">
        <ul className="menu-horizontal__list">
          <li className="menu-horizontal__item">
            <a href="#/" className="menu-horizontal__link">
              Accueil
            </a>
          </li>
          <li className="menu-horizontal__item">
            <a href="#/" className="menu-horizontal__link">
              Profil
            </a>
          </li>
          <li className="menu-horizontal__item">
            <a href="#/" className="menu-horizontal__link">
              Réglages
            </a>
          </li>
          <li className="menu-horizontal__item">
            <a href="#/" className="menu-horizontal__link">
              Communauté
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuHorizontal;
