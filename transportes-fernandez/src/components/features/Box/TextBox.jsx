import React from 'react';
import './TextBox.css';

const TextBox = ({ children }) => {
  return (
    <div className="text-box">
      {children}
    </div>
  );
};

export default TextBox;
