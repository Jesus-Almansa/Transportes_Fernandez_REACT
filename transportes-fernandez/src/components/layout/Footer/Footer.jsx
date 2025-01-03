import React from 'react';
import './Footer.css'; // Puedes importar estilos específicos para el footer

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="padding-vertical-0"></div>
      <div className='text-body'>&copy; {currentYear} Transportes Fernández. Todos los derechos reservados.</div>
    </footer>
  );
};

export default Footer;
