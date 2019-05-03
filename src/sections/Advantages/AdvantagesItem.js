import React from "react";
import PropTypes from 'prop-types';

import {blocks} from "../../img";

const AdvantagesItem = ({ title, icon, content }) => {
  return (
    <div className="advantages__item">
      <img src={blocks[icon]} alt={icon} />
      <h4>{title}</h4>
      <p>
        {content}
      </p>
    </div>
  );
};

AdvantagesItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  content: PropTypes.string,
};

AdvantagesItem.defaultProps = {
  title: '',
  icon: '',
  content: '',
}

export default AdvantagesItem;
