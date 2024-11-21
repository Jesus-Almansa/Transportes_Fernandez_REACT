import React from 'react';
import MediaPicture from '../components/features/MediaPicture/MediaPicture';
import TextBox from '../components/layout/Box/TextBox';

import laMancha from '../assets/original_images/Regional.png';

function About() {
  return (
    <div id="About">
      <h1 className='alinearEnColumna'>Sobre nosotros</h1>
      <br />
      
      <div className='alinearEnColumna'>
        <div className="enLinea">
          <div className="izquierda">
            <MediaPicture src={laMancha} alt="placeholder" className='media_picture' />
          </div>
          <div className='derecha'>
            <TextBox className='text-box-Empresa'>
              Transportes Fernández is a family business that has been operating for over 40 years. We specialize in regional transportation, covering the area of La Mancha.
            </TextBox>
          </div>
        </div>
      </div>
      <p>Learn more about our company and services. TONTO EL QUE LO LEA</p>
    </div>
  );
}

export default About;
