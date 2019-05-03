import React from 'react';
import {letters} from "../../img";

const Preloader = () => {

  return (
    <div>
      <div className="preloader">
        <div className="preloader-box">
          <div><img src={letters.b} alt=""/></div>
          <div><img src={letters.i} alt=""/></div>
          <div><img src={letters.z} alt=""/></div>
          <div><img src={letters.i} alt=""/></div>
          <div><img src={letters.c} alt=""/></div>
          <div><img src={letters.o} alt=""/></div>
        </div>
      </div>
    </div>
  )
}

export default Preloader;
