import React from 'react';

// Componentes
import ContactForm from '../../components/features/ContactForm/ContactForm';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import Maps from '../../components/features/Maps/Maps';

// Imágenes
import fachada from '../../assets/TransportersBranding/SEXIO/100/fachadaAbierta.jpg';

function Contact() {
  return (
    <div id="Contact">

      <div className="alinearEnColumna">

        <MediaPicture
          src={fachada}
          alt="fachada"
          className="picture-container picture-Contacto"
        />
      </div>
      {/* <ContactForm /> */}

      <div className="padding-vertical-1"></div>

      <Maps />

      <div className="padding-vertical-0"></div>

    </div >
  );
}

export default Contact;
