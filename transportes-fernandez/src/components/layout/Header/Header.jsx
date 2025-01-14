import React from 'react';
import { Container, AppBar, Toolbar, Box } from '@mui/material';
import './Header.css';
import Logo from '../../features/Logo/Logo';
import NavButton from '../../features/NavButton/NavButton';
import BurgerButton from '../../features/BurgerButton/BurgerButton';
import routes from '../../../data/navi_routes';
import useIsMobile from '../../hooks/useIsMobile';

function Header() {
  const isMobile = useIsMobile(); // Hook para detectar dispositivo móvil

  return (
    <AppBar position="static" className="header-appbar">
      <Container maxWidth="xlg">
        <Toolbar className="header-toolbar">
          {/* Logo aligned to the left */}
          <Box className="header-logo-container">
            <Logo className="header-logo" />
          </Box>
          
          {!isMobile && (
            <Box className="nav-container">
              {routes.map(({ label, path }) => (
                <NavButton key={path} to={path} label={label} />
              ))}
            </Box>
          )}

          {/* Burger Button for mobile */}
          {isMobile && <BurgerButton routes={routes} />}

          {/* Empty Box to push buttons to the center */}
          <Box className="header-placeholder" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
