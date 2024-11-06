// menu.jsx
import React, { useRef } from 'react';
import './App.css'; // Asegúrate de que los estilos están siendo importados

const Menu = () => {
  const navMenuRef = useRef(null);

  const toggleMenu = () => {
    if (navMenuRef.current) {
      navMenuRef.current.classList.toggle('show');
    }
  };

  return (
    <>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Icono de menú hamburguesa */}
      </div>
      <nav ref={navMenuRef} className="nav-menu">
        <a href="/">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/about">Sobre Nosotros</a>
        <a href="/contacto">Contacto</a>
      </nav>
    </>
  );
};

export default Menu;
