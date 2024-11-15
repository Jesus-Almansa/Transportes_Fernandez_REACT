import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './BurgerButton.css';

function BurgerButton({ routes }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  
  const titulo = 'Transportes Fernandez';

  return (
    <div className="burger-container">
      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="menu" 
        onClick={handleToggle}
        className="burger-button"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <div className={`burger-menu ${open ? 'open' : ''}`}>
        {open && <h1 className="menu-header">{titulo}</h1>}
        {Object.entries(routes).map(([key, path]) => (
          <Link to={path} className="menu-item" key={key} onClick={() => setOpen(false)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BurgerButton;
