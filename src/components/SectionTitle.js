import React from "react";
import PropTypes from 'prop-types';

const SectionTitle = ({content, className}) => (
  <h1 className={`section_title ${className}`}>
    {content}
  </h1>
);

SectionTitle.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
}

SectionTitle.defaultProps = {
  className: '',
}

export default SectionTitle;
