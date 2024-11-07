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
      <Container maxWidth="lg">
        <Toolbar className="header-toolbar">
          {/* Logo o Título */}
          <Typography variant="h6" component="div" className="header-title">
            <Logo />
          </Typography>

          {/* Enlaces de Navegación */}
          <Button component={Link} to="/" color="inherit" className="header-button">Home</Button>
          <Button component={Link} to="/about" color="inherit" className="header-button">About</Button>
          <Button component={Link} to="/contact" color="inherit" className="header-button">Contact</Button>
          <Button component={Link} to="/services" color="inherit" className="header-button">Services</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
