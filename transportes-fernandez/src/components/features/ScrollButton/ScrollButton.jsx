/* ScrollButton.jsx */
import React from 'react';
import './ScrollButton.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollButton = () => {
  const scrollToTop = () => {
    console.log('Scroll to top button clicked');
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };


  return (
    <div className="ScrollButton-button" onClick={scrollToTop}>
      <ArrowUpwardIcon />
    </div>
  );
};

export default ScrollButton;