import React, { useState, useRef, useEffect } from 'react';
import './WhatsAppButton.css';

// Iconos de Material UI
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';

// Ejemplo de lista de contactos
const contacts = [
  {
    name: 'Administración',
    description: 'Facturación',
    phone: '+34669354145',
    initialMessage: 'Hola, estoy interesado en temas de facturación...',
  },
  {
    name: 'Comercial',
    description: 'Información y presupuestos',
    phone: '+34652098561',
    initialMessage: 'Hola, me gustaría solicitar un presupuesto...',
  },
  {
    name: 'Jefe de tráfico',
    description: 'Asistencia técnica',
    phone: '+34669354144',
    initialMessage: 'Hola, necesito asistencia técnica con SuitER...',
  },
];

function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Referencia para cerrar el panel al hacer clic fuera
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Alterna entre abierto/cerrado
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  // Construye la URL de WhatsApp
  const getWhatsAppLink = (phone, message) => {
    const encodedMsg = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`;
  };

  return (
    <div 
      className={`whatsapp-container ${isOpen ? 'open' : ''}`} 
      ref={containerRef}
    >
      {/* Botón con los dos iconos superpuestos */}
      <button className="whatsapp-button" onClick={togglePanel}>
        <WhatsAppIcon className="icon-whatsapp" />
        <CloseIcon className="icon-close" />
      </button>

      {/* 
        Panel siempre en el DOM. 
        Su visibilidad/anima se controla con la clase .show 
      */}
      <div className={`whatsapp-panel ${isOpen ? 'show' : ''}`}>
        <h3 className="whatsapp-panel-title">Contáctanos</h3>
        <p className="whatsapp-panel-subtitle">
          Selecciona el departamento con el que deseas hablar.
        </p>
        <div className="whatsapp-contacts">
          {contacts.map(({ name, description, phone, initialMessage }) => (
            <a
              key={name}
              href={getWhatsAppLink(phone, initialMessage)}
              className="whatsapp-contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-info">
                <span className="contact-name">{name}</span>
                <span className="contact-description">{description}</span>
              </div>
              <WhatsAppIcon className="contact-icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatsAppButton;
