import React from 'react';

const Button = ({title, className, ...props}) => {
  return (
    <button type="submit" className={`button ${className}`} {...props}>
      {title}
    </button>
  )
};

export default Button;
