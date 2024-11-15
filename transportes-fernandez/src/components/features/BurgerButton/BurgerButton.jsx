import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import './BurgerButton.css';

function BurgerButton({ routes }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="menu" 
        onClick={handleClick}
        className="burger-button"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.entries(routes).map(([key, path]) => (
          <MenuItem key={key} onClick={handleClose}>
            <Link to={path} className="menu-item">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default BurgerButton;
