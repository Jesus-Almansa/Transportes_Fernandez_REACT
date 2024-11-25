import React from 'react';
import MediaPicture from '../components/features/MediaPicture/MediaPicture';
import TextBox from '../components/layout/Box/TextBox';

import laMancha from '../assets/original_images/regional.png';
import CiutatVella from '../assets/original_images/nacional.jpg';

function About() {
  return (
    <div id="About">

      <h1 className='alinearEnColumna'>Sobre nosotros</h1>
      <div className="enLinea">
        <div className="izquierda">
          <MediaPicture
            src={laMancha}
            alt="Descripción de la imagen"
            className="picture-container picture-empresa-main"
          />

        </div>
        <div className='derecha'>
          <TextBox className='text-box-Empresa'>
            Transportes Fernández is a family business that has been operating for over 40 years. We specialize in regional transportation, covering the area of La Mancha.
          </TextBox>
        </div>
      </div>


      <p>Learn more about our company and services. TONTO EL QUE LO LEA</p>

      <h1 className='alinearEnColumna'>Sobre nosotros</h1>
      <div className="enLinea">
        <div className="izquierda">
          <MediaPicture
            src={CiutatVella}
            alt="Descripción de la imagen"
            className="picture-container picture-empresa-main"
          />

        </div>
        <div className='derecha'>
          <TextBox className='text-box-Empresa'>
            Transportes Fernández is a family business that has been operating for over 40 years. We specialize in regional transportation, covering the area of La Mancha.
          </TextBox>
        </div>
      </div>
    </div>
  );
}

export default About;
