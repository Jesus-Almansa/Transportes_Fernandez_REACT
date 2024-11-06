// menu.jsx
import React from 'react';
import './App.css'; // Asegúrate de que los estilos están siendo importados

const Menu = () => {
  const toggleMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
      navMenu.classList.toggle('show');
    }
  };

  return (
    <>
      <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Icono de hamburguesa */}
      </div>
      <nav id="nav-menu" className="nav-menu">
        <a href="/">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/about">Sobre Nosotros</a>
        <a href="/contacto">Contacto</a>
      </nav>
    </>
  );
};

export default Menu;
