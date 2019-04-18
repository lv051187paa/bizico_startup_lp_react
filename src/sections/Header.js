import React, { useContext } from "react";
import Logo from "../img/logo.svg";
import SectionTitle from "../components/SectionTitle";
import { ContentContext } from "../context";

const Header = () => {
  const { header } = useContext(ContentContext);
  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <Logo />
        </a>
        <div className="header__offer">
          <SectionTitle content={header.title} className="header__offer-title" />
          <p className="description header__offer-description">{header.description}</p>
        </div>
        <div className="header__info">
          <input
            type="text"
            className="input header__info-input"
            placeholder="Enter you email here for more info"
          />
          <button className="button header__info-action">Get more info</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
