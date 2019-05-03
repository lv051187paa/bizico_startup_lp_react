import React from "react";
import PropTypes from 'prop-types';

import {blocks} from '../../img';

const CompetenciesItem = ({ icon, content }) => {
  return (
    <div className="competencies__item">
      <img src={blocks[icon]} alt={icon} />
      <p>{content}</p>
    </div>
  );
};

CompetenciesItem.propTypes = {
  icon: PropTypes.string,
  content: PropTypes.string,
}

CompetenciesItem.defaultProps = {
  icon: '',
  content: '',
}

export default CompetenciesItem;
