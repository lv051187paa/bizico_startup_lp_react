import React, {useEffect, useState} from 'react';

import logo from "../img/logo.svg";

const MIN_SCROLL = 160;
const isLogoVisible = (scroll) =>
  scroll <= MIN_SCROLL;

const StickyHeader = () => {

  let position = 0;
  const [headderVisible, setHeaderVisible] = useState(!isLogoVisible(position));
  const handleScroll = () => {
      setHeaderVisible(!isLogoVisible(window.scrollY));
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div className={`sticky-header ${headderVisible && 'show'}`}>
      <div className="container">
        <img src={logo} alt="Logo"/>
      </div>
    </div>
  )
}

export default StickyHeader;
