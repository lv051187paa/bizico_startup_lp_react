import React from 'react';
import PropTypes from 'prop-types';

const Button = ({title, className, ...props}) => {
  return (
    <button type="submit" className={`button ${className}`} {...props}>
      {title}
    </button>
  )
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

Button.defaultProps = {
  className: '',
}

export default Button;
