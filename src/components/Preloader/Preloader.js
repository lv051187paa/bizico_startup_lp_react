import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './preloader.xml';

const Preloader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    renderer: 'svg',
    path: animationData,
  };
  return (

  <div>
    <div className="page-bg"></div>

    <div className="preloader">
      <div className="preloader-box">
        <div>L</div>
        <div>O</div>
        <div>A</div>
        <div>D</div>
        <div>I</div>
        <div>N</div>
        <div>G</div>
      </div>
    </div>
  </div>
)
}

export default Preloader;
