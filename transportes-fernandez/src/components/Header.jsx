import React from 'react';
import { Container, AppBar, Toolbar } from '@mui/material';
import './Header.css'; // Importar el archivo de estilos CSS
import Logo from './Logo';
import NavButton from './NavButton';
import routes from '../data/routes'; // Importar las rutas

function Header() {
  return (
    <AppBar position="static" className="header-appbar">
      <Container maxWidth="xlg">
        <Toolbar className="header-toolbar">
          {/* Logo o Título */}
          <Logo />

          {/* Enlaces de Navegación */}
          <Container maxWidth="sm" className="nav-container">
          {Object.entries(routes).map(([key, path]) => (
              <NavButton key={key} to={path} label={key.charAt(0).toUpperCase() + key.slice(1)} />
            ))}
          </Container>
          <div className="oculto">  
            <Logo />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
