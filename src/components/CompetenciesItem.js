import React from "react";

import images from '../img';

const CompetenciesItem = ({ icon, content }) => {
  return (
    <div className="competencies__item">
      <img src={images[icon]} alt={icon} />
      <p>{content}</p>
    </div>
  );
};

export default CompetenciesItem;
