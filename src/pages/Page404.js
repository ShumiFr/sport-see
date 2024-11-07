import React from "react";
import MenuHorizontal from "../components/MenuHorizontal";
import MenuVertical from "../components/MenuVertical";
import "../styles/pages/page404.css";

const Page404 = () => {
  return (
    <div className="error-page">
      <MenuHorizontal />
      <MenuVertical />
      <div className="error-page__content">
        <h1>404</h1>
        <p>Page not found</p>
        <div className="error-page__links">
          <a href="/user/18">Redirection vers l'utilisateur 18</a>
          <a href="/user/12">Redirection vers l'utilisateur 12</a>
        </div>
      </div>
    </div>
  );
};

export default Page404;
