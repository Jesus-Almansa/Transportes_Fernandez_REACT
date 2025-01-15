import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './BurgerButton.css';

function BurgerButton({ routes }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu

  const handleToggle = () => setOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    // Close menu if clicked outside of it
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      // Add event listener when menu is open
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove event listener when menu is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="burger-container">
      {/* Toggle Button */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleToggle}
        className="burger-button "
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* Menu */}
      <div
        ref={menuRef} // Attach the reference to the menu
        className={`burger-menu ${open ? 'open' : ''}`}
      >
        <h1 className="menu-header">TRANSPORTES FERNÁNDEZ</h1>
        {routes.map(({ label, path }) => (
          <Link
            to={path}
            className="menu-item"
            key={path}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BurgerButton;
