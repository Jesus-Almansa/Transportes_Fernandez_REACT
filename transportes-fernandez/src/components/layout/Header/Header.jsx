import React from 'react';
import { Container, AppBar, Toolbar } from '@mui/material';
import './Header.css';
import Logo from '../../features/Logo/Logo';
import NavButton from '../../features/NavButton/NavButton';
import BurgerButton from '../../features/BurgerButton/BurgerButton';
import routes from '../../../data/navi_routes';
import useIsMobile from '../../hooks/useIsMobile'; // Hook para detección del dispositivo

function Header() {
  const isMobile = useIsMobile(); // Llama al hook para determinar si es un dispositivo móvil

  return (
    <AppBar position="static" className="header-appbar">
      <Container maxWidth="xlg">
        <Toolbar className="header-toolbar">
          {/* Logo siempre visible */}
          <Logo className="header-logo" />

          {/* Mostrar NavButton o BurgerButton según el dispositivo */}
          {isMobile ? (
            <BurgerButton routes={routes} />
          ) : (
            <Container maxWidth="sm" className="nav-container">
              {routes.map(({ label, path }) => (
                <NavButton key={path} to={path} label={label} />
              ))}
            </Container>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
