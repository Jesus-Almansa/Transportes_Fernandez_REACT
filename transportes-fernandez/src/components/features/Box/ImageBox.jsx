import React from 'react';
import './Box.css';

const ImageBox = ({ image, className }) => {
  return (
    <div className={className}>
      src={image}
    </div>
  );
};

export default ImageBox;