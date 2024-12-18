import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
// import './NavButton.css';

function NavButton({ to, label }) {
  return (
    <Button 
      component={Link} // Replace the default 'button' element with a Link
      to={to} 
      color="inherit" 
      size="large" 
      className="header-button"
    >
      <b>{label}</b>
    </Button>
  );
}

export default NavButton;