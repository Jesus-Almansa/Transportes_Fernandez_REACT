import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './Header.css'; // Importar el archivo de estilos CSS
import Logo from './Logo';

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
            <Button component={Link} to="/" color="inherit" size="large" className="header-button"><b>Inicio</b></Button>
            <Button component={Link} to="/about" color="inherit" size="large" className="header-button"><b>Servicios</b></Button>
            <Button component={Link} to="/contact" color="inherit" size="large" className="header-button"><b>Equipo</b></Button>
            <Button component={Link} to="/services" color="inherit" size="large" className="header-button"><b>Contacto</b></Button>
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
