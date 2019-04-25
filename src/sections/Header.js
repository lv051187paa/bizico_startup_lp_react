import React, { useContext } from "react";
import logo from "../img/logo.svg";
import SectionTitle from "../components/SectionTitle";
import { ContentContext } from "../context/ContentProvider";
import SubscriptionForm from '../components/Forms/SubscriptionForm';

const Header = () => {
  const { header } = useContext(ContentContext);
  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <img src={logo} alt="bizico logo" />
        </a>
        <div className="header__offer">
          <SectionTitle content={header.title} className="header__offer-title" />
          <p className="description header__offer-description">{header.description}</p>
        </div>
        <div className="header__info">
          <SubscriptionForm formClass="header__info" />
        </div>
      </div>
    </header>
  );
};

export default Header;
