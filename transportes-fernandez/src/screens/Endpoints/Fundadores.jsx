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
                            <strong className='text-red'>Jose María </strong> es el socio fundador original de Transportes Fernández. Hijo de agricultores, realizó el servicio militar obligatorio en Chinchilla, Albacete.

                            <div className="padding-vertical-4"></div>

                            Fue durante este tiempo que tuvo la oportunidad, como muchas otras personas que venían del campo, de aprender a leer y escribir, junto a otras competencias que en entornos rurales eran complicado de obtener. 
                            
                            <div className="padding-vertical-4"></div>

                            Obtuvo el permiso de conducir y descubrió que disfrutaba mucho de esta nueva destreza que le concedía libertad y autonomía. Llegó a la conclusión de que no quería seguir el camino de sus padres, que quería echarse a la carretera y fundó la empresa que conocemos hoy día.

                        </TextBox>

                    </div>
                </div>
            </div>

            <div className='padding-vertical-2'></div>

            <div className="alinearEnColumna">

                <div className="enLinea">

                    <div className="izquierda">
                        <MediaPicture
                            src={yaya}
                            alt="yaya, te echo de menos"
                            className="picture-container picture-Yaya"
                        />
                    </div>

                    <div className='derecha'>

                        <TextBox className='text-box text-box-Fundadores-JoseMaria text-body'>
                            <strong className='text-red'>María Asunción </strong>, socia fundadora de la empresa junto a su marido. Con una visión clara y una determinación inquebrantable, participó activamente en los primeros pasos de esta compañía, sentando las bases de los valores que aún hoy nos guían: compromiso, honestidad y cercanía. 
                            
                            <div className="padding-vertical-4"></div>

                            Su apoyo ha sido fundamental para el crecimiento y consolidación de la compañía, que ha pasado de ser un pequeño negocio familiar a convertirse en una de las empresas de transporte más reconocidas de la región.
                        </TextBox>
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