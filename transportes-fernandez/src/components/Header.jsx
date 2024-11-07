import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          {/* Logo or Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Transportes Fernandez 
            (Falta componente de Logo)
          </Typography>

          {/* Navigation Links */}
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>
          <Button component={Link} to="/services" color="inherit">Services</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
