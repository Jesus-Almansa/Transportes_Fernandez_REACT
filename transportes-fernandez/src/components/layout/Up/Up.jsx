/* Up.jsx */
import React from 'react';
import './Up.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Up = () => {
  const scrollToTop = () => {
    console.log('Scroll to top button clicked');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <div className="up-button" onClick={scrollToTop}>
      <ArrowUpwardIcon />
    </div>
  );
};

export default Up;