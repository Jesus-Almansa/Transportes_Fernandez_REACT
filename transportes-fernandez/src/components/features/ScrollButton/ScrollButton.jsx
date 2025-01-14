/* ScrollButton.jsx */
import React from 'react';
import './ScrollButton.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollButton = () => {
  const scrollToTop = () => {
    console.log('Scroll to top button clicked');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <div className="ScrollButton-button" onClick={scrollToTop}>
      <KeyboardArrowUpIcon />
    </div>
  );
};

export default ScrollButton;