import React, { useRef } from 'react';
import './Menu.css'; // Puedes importar estilos específicos para el menú

const Menu = () => {
  const navMenuRef = useRef(null);

  const toggleMenu = () => {
    if (navMenuRef.current) {
      navMenuRef.current.classList.toggle('show');
    }
  };

  return (
    <div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Icono de hamburguesa */}
      </div>
      <nav ref={navMenuRef} className="nav-menu">
        <a href="/">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/about">Sobre Nosotros</a>
        <a href="/contacto">Contacto</a>
      </nav>
    </div>
  );
};

export default Menu;
