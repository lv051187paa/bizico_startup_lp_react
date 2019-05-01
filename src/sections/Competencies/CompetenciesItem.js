import React from "react";

import {blocks} from '../../img';

const CompetenciesItem = ({ icon, content }) => {
  return (
    <div className="competencies__item">
      <img src={blocks[icon]} alt={icon} />
      <p>{content}</p>
    </div>
  );
};

export default CompetenciesItem;
