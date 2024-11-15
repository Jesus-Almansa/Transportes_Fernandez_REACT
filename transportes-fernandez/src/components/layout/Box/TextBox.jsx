import React from 'react';
import './Box.css';

const TextBox = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default TextBox;