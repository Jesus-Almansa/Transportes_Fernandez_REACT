import React from 'react';
import { Link } from "react-router-dom";

// Componentes
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import Maps from '../../components/features/Maps/Maps';
import Background from '../../components/features/Background/Background';
import MailButton from '../../components/features/MailButton/MailButton';
import TextBox from '../../components/layout/Box/TextBox';

// Imágenes
import fachada from '../../assets_prod/Contacto/fachadaAbierta.jpg';
import españa2 from '../../assets_prod/Inicio/españakbron22.jpg';

import { getPathByLabel } from '../../data/routes';

function Contacto() {
  return (
    <div id="Contacto">

      <div className="padding-vertical-0"></div>

      <div className="alinearEnColumna">
        <MediaPicture
          src={fachada}
          alt="fachada"
          className="picture-container picture-Contacto"
        />
      </div>

      <div className="padding-vertical-0"></div>

      <Background
        color="#1a2a36" // Hexadecimal color
        transparency={0.9} // Transparency instead of opacity
        imageUrl={españa2} // España map as background
      >
        <div className="alinearEnColumna">
          <div className="padding-vertical-up-3"></div>
          <h1 className="text-white large-text-title">{" "}
            <Link to={getPathByLabel('contacto')} className="text-white no-underline">
              <strong>CONTÁCTANOS PARA CUALQUIER DUDA</strong>
            </Link>
            {" "} </h1>

          <div className="padding-vertical-2"></div>
        </div>

        <TextBox className="text-box text-box-Home-Horarios text-body alinearEnColumna negrita">
          HORARIO DE OFICINA:
          <br />
          LUNES A VIERNES DE 9:00 A 14:00 Y DE 16:30 A 19:30

          <div className="padding-vertical-1"></div>

          CORREO:
          <br />
          contacto@transportesfernandez.es
        </TextBox>

        <div className="enLinea negrita">

          <div className="padding-vertical-1"></div>

          <MailButton
            email="contacto@transportesfernandez.es"
            subject="Consulta desde la web"
            body="Hola, tengo algunas dudas sobre..."
            className="mail-button"
          >
            ESCRÍBENOS
          </MailButton>

        </div>

        <div className="padding-vertical-3"></div>

      </Background>

      <div className="padding-vertical-0"></div>

      <Maps />

      <div className="padding-vertical-0"></div>

    </div >
  );
}

export default Contacto;
