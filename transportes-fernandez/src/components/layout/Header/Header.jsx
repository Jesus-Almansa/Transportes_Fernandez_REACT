import React from 'react';
import { Container, AppBar, Toolbar } from '@mui/material';
import './Header.css';
import Logo from '../../features/Logo/Logo';
import NavButton from '../../features/NavButton/NavButton';
import BurgerButton from '../../features/BurgerButton/BurgerButton';
import routes from '../../../data/routes';
import useIsMobile from '../../hooks/useIsMobile'; // Importa el hook de detección del dispositivo

function Header() {
  const isMobile = useIsMobile(); // Llama al hook para determinar si es un dispositivo móvil

  return (
    <AppBar position="static" className="header-appbar">
      <Container maxWidth="xlg">
        <Toolbar className="header-toolbar">
          {/* Logo */}
          <Logo className=''/>

          {/* Mostrar NavButton o BurgerButton según el dispositivo */}
          {isMobile ? (
            <BurgerButton routes={routes} />
          ) : (
            <Container maxWidth="sm" className="nav-container">
              {Object.entries(routes).map(([key, path]) => (
                <NavButton key={key} to={path} label={key.charAt(0).toUpperCase() + key.slice(1)} />
              ))}
            </Container>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
