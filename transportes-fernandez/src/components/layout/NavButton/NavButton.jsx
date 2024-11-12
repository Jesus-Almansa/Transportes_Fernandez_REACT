// NavButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function NavButton({ to, label }) {
  return (
    <Button 
      component={Link} 
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