import React from 'react';
import './Box.css';

const MediaBox = ({ image, className }) => {
  return (
    <div className={className}>
      src={image}
    </div>
  );
};

export default MediaBox;