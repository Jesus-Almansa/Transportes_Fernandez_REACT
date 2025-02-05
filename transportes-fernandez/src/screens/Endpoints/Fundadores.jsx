import React from "react";
import { Link } from "react-router-dom";
// Components
import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Imágenes
import joseMaria from '../../assets/original_images/JoseMaria_Joven.png';

// Rutas
import { getPathByLabel } from '../../data/routes';

const Fundadores = () => {
    return (
        <div>
            <h1 className="large-text-title padding-vertical-3 text-box-Home-IntroTitle">FUNDADORES</h1>

            <div className='padding-vertical-2'></div>

            <div className="alinearEnColumna">
                <div className="enLinea">
                    <div className="izquierda">
                        <MediaPicture
                            src={joseMaria}
                            alt="Jose María Fernández"
                            className="picture-container picture-JoseMaria"
                        />

                    </div>
                    <div className='derecha'>
                        <TextBox className='text-box text-box-Fundadores-JoseMaria text-body'>

                            <strong className='text-red'>Jose María </strong> es el socio fundador original de Transportes Fernández. Con más de 40 años  de experiencia en el sector del transporte, ha sido el motor de la empresa desde sus inicios. Su visión y liderazgo han sido fundamentales para el crecimiento y consolidación de la compañía, que ha pasado de ser un pequeño negocio familiar a convertirse en una de las empresas de transporte más reconocidas de la región.

                        </TextBox>
                    </div>
                </div>
            </div>

            <div className='padding-vertical-4'></div>

        </div>
    );
}

export default Fundadores;