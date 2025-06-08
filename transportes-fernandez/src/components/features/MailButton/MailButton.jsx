// MailButton.jsx
import React from 'react';
import './MailButton.css';

// Importa tus dos imágenes
import gmailIcon from '../../../assets_prod/social_icons/1/social media icon-03.png';
import gmailIconHover from '../../../assets_prod/social_icons/3/social media icon-17.png';

const MailButton = ({ email, subject, body, children }) => {
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}${
    subject ? `&su=${encodeURIComponent(subject)}` : ''
  }${body ? `&body=${encodeURIComponent(body)}` : ''}`;

  return (
    <a
      href={gmailURL}
      className="mail-button"   // Asigna la clase "mail-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Ícono por defecto */}
      <img
        src={gmailIcon}
        alt="Mail Icon Default"
        className="mail-icon mail-icon-default"
      />

      {/* Ícono que se mostrará al hacer hover */}
      <img
        src={gmailIconHover}
        alt="Mail Icon Hover"
        className="mail-icon mail-icon-hover"
      />

      {/* Texto del botón */}
      {children}
    </a>
  );
};

export default MailButton;
