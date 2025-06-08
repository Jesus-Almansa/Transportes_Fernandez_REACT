import React from "react";

// Components
import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Imágenes
import JoseMariaJoven from '../../assets_prod/Equipo/joseMaria_Joven.jpg';
import yaya from '../../assets_prod/Equipo/yaya.jpg';
import anuncio from '../../assets_prod/Equipo/anuncioPeriodico.jpg';

const Fundadores = () => {
    return (
        <div>
            <div className="alinearEnColumna">
                <h1 className="large-text-title text-box-Home-IntroTitle padding-vertical-4">FUNDADORES</h1>
                <div className="enLinea">
                    <div className="izquierda">
                        <MediaPicture
                            src={JoseMariaJoven}
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

            <div className='padding-vertical-2'></div>

            <TextBox className='text-box text-box-Fundadores-JoseMaria text-body'>
                Durante su juventud 
            </TextBox>

            <div className='padding-vertical-4'></div>

            <div className="alinearEnColumna">

                <div className="enLinea">

                    <div className="izquierda">
                        <TextBox className='text-box text-box-Fundadores-JoseMaria text-body'>
                            <strong className='text-red'>María Asunción </strong> es la socio fundador original de Transportes Fernández. Con más de 40 años  de experiencia en el sector del transporte, ha sido el motor de la empresa desde sus inicios. Su visión y liderazgo han sido fundamentales para el crecimiento y consolidación de la compañía, que ha pasado de ser un pequeño negocio familiar a convertirse en una de las empresas de transporte más reconocidas de la región.
                        </TextBox>
                    </div>

                    <div className='derecha'>
                        <MediaPicture
                            src={yaya}
                            alt="Jose María Fernández"
                            className="picture-container picture-Yaya"
                        />
                    </div>
                </div>

            </div>

            <h1 className="large-text-title text-box-Home-IntroTitle padding-vertical-4">PRIMER ANUNCIO</h1>

            <MediaPicture
                src={anuncio}
                alt="Anuncio del periódico"
                className="picture-container picture-Anuncio-Periodico"
            />

            <div className='padding-vertical-2'></div>

        </div>
    );
}

export default Fundadores;