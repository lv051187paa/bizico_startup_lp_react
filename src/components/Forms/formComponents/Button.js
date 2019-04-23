import React from 'react';

const Button = ({title, className}) => {
  return (
    <button type="submit" className={`button ${className}`}>
      {title}
    </button>
  )
};

export default Button;
