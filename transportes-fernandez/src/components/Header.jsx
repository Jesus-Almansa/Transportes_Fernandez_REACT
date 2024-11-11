// Header.jsx
import React from 'react';
import { Container, AppBar, Toolbar } from '@mui/material';
import './Header.css'; // Importar el archivo de estilos CSS
import Logo from './Logo';
import NavButton from './NavButton'; // Importar el nuevo componente NavButton

function Header() {
  return (
    <AppBar position="static" className="header-appbar">
      <Container maxWidth="xlg">
        <Toolbar className="header-toolbar">
          {/* Logo o Título */}
          <Logo />

          {/* Enlaces de Navegación */}
          <Container maxWidth="sm" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}>
            <NavButton to="/" label="Inicio" />
            <NavButton to="/about" label="Equipo" />
            <NavButton to="/contact" label="Contacto" />
            <NavButton to="/services" label="Servicios" />
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
