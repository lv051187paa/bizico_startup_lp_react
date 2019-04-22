import React from "react";

import images from "../img";

const AdvantagesItem = ({ title, icon, content }) => {
  return (
    <div className="advantages__item">
      <img src={images[icon]} alt={icon} />
      <h4>{title}</h4>
      <p>
        {content}
      </p>
    </div>
  );
};

export default AdvantagesItem;
