import React from 'react';
import './Footer.css'; // Puedes importar estilos específicos para el footer

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} Transportes Fernández. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
