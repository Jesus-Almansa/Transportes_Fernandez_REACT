import React, { useState } from 'react';
import './WhatsAppButton.css';

// Ejemplo de iconos. Cambia las rutas si usas tus propias imágenes.
import iconWhatsApp from '../../../assets/TransportersBranding/social media icon/1/social media icon-03.png'; 
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import iconClose from '../../../assets/TransportersBranding/social media icon/3/social media icon-15.png';

// Estructura de contactos. Puedes adaptarlo a tu gusto
const contacts = [
  {
    name: 'Administración',
    description: 'Facturación',
    phone: '+34669354145', // Ejemplo de número
    // Mensaje inicial que se autoescribirá en WhatsApp
    initialMessage: 'Hola, estoy interesado en temas de facturación...',
  },
  {
    name: 'Comercial',
    description: 'Información y presupuestos',
    phone: '+34 652 098 561',
    initialMessage: 'Hola, me gustaría solicitar un presupuesto...',
  },
  {
    name: 'Servicio Técnico SuitER',
    description: 'Asistencia técnica',
    phone: '+34669354144',
    initialMessage: 'Hola, necesito asistencia técnica con SuitER...',
  },
];

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir/cerrar el panel
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  // Construye URL de WhatsApp con api.whatsapp.com, añadiendo phone y text
  const getWhatsAppLink = (phone, message) => {
    const encodedMsg = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`;
  };

  return (
    <div className="whatsapp-container">
      {/* Botón flotante (o posicionado) de WhatsApp */}
      <button className="whatsapp-button" onClick={togglePanel}>
        {isOpen ? (
          <img src={iconClose} alt="Close Icon" className="icon-close" />
        ) : (
          <img src={iconWhatsApp} alt="WhatsApp Icon" className="icon-whatsapp" />
        )}
      </button>

      {/* Panel desplegable si isOpen es true */}
      {isOpen && (
        <div className="whatsapp-panel">
          <h3 className="whatsapp-panel-title">Equipo de TRANSPORTES FERNÁNDEZ</h3>
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
                <img
                  src={iconWhatsApp}
                  alt="WhatsApp Icon"
                  className="contact-icon"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
