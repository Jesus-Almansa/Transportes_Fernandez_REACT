import React from 'react';
import { Container, AppBar, Toolbar, Box } from '@mui/material';
import './Header2.css';
import Logo from '../../features/Logo/Logo';
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
          <BurgerButton routes={routes} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
