import React from 'react';
import { Link } from "react-router-dom";

import { getPathByLabel } from '../../data/routes';

// Componentes
import BoxList from '../../components/layout/Box/BoxList.jsx';
import MediaVideo from '../../components/features/MediaVideo/MediaVideo.jsx';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture.jsx';
import TextBox from '../../components/layout/Box/TextBox.jsx';
import FlipCard from '../../components/features/FlipCard/FlipCard.jsx';

// Imágenes
import ciutatVella from '../../assets/original_images/nacional.jpg';
import valencia from '../../assets/original_images/valencia.jpg';
import laMancha from '../../assets/original_images/laMancha.jpg';
import infiniteCubeImage from '../../assets/images/infinitecube.png';
import equipamientoIndustrial from '../../assets/original_images/equipamienoIndustrial2.png'
import parquesEolicos from '../../assets/original_images/parquesEolicos0.png';
import medidasEspeciales from '../../assets/original_images/medidasEspeciales.png';
import internacional from '../../assets/original_images/space.png';
import españa from '../../assets/original_images/españakbron.png';
import españa2 from '../../assets/original_images/españakbron22.png';
import nave from '../../assets/TransportersBranding/SEXIO/Editadas/_DSC7901-Pano.jpg';


// Iconos
import IconoServicios from '../../assets/TransportersBranding/icongraphy/1/Icons-28.png';
import iconoLaMancha from '../../assets/TransportersBranding/icongraphy/1/icons-72.png';
import iconoValencia from '../../assets/TransportersBranding/icongraphy/1/icons-73.png';
import iconoInternacional from '../../assets/TransportersBranding/icongraphy/1/icons-74.png';
import iconoIndustrial from '../../assets/TransportersBranding/icongraphy/1/icons-75.jpg';
import iconoEolico from '../../assets/TransportersBranding/icongraphy/1/icons-76.png';
import iconoEspecial from '../../assets/TransportersBranding/icongraphy/1/icons-77.png';
import zeldaVideo from '../../assets/video/zelda.mp4';
import OIAI from '../../assets/video/OIAI.mp4';


const Services = () => {
    return (
        <div id='Servicios'>

            <MediaPicture src={nave} alt="placeholder" className='picture-container' />

            <div className="alinearEnColumna">
                <div className="enLinea">
                    <FlipCard
                        frontImage={equipamientoIndustrial}
                        backText={"Equipamiento industrial"}
                        icon={
                            <Link to={getPathByLabel("servicios")}>
                                <img src={iconoIndustrial} alt='iconIndustrial' />
                            </Link>}
                    />
                    <FlipCard
                        frontImage={parquesEolicos}
                        backText="Parques eólicos"
                        icon={
                            <Link to={getPathByLabel("servicios")}>
                                <img src={iconoEolico} alt='iconEolico' />
                            </Link>}
                    />
                    <FlipCard
                        frontImage={medidasEspeciales}
                        backText="Medidas especiales"
                        icon={
                            <Link to={getPathByLabel("servicios")}>
                                <img src={iconoEspecial} alt='iconEspecial' />
                            </Link>}
                    />
                </div>
            </div>

            <div className='padding-vertical-0' ></div>

            <div className="alinearEnColumna">
                <div className="enLinea">
                    <FlipCard
                        frontImage={laMancha}
                        backText={"Transporte regional en La Mancha"}
                        icon={
                            <Link to={getPathByLabel("servicios")}>
                                <img src={iconoLaMancha} alt='iconLaMancha' />
                            </Link>}
                    />
                    <FlipCard
                        frontImage={valencia}
                        backText="Transporte por toda la península e islas"
                        icon={
                            <Link to={getPathByLabel("servicios")}>
                                <img src={iconoValencia} alt='iconValencia' />
                            </Link>}
                    />
                    <FlipCard
                        frontImage={internacional}
                        backText="Transporte a nivel internacional"
                        icon={
                            <Link to={getPathByLabel("servicios")}>
                                <img src={iconoInternacional} alt='iconInternacional' />
                            </Link>}
                    />
                </div>
            </div>

            <div className='padding-vertical-0' ></div>


            {/* <MediaVideo content={zeldaVideo} />
            
            <MediaVideo content="https://www.youtube.com/watch?v=olKjeHdOW3Y" />
            
            <MediaVideo content={OIAI} /> */}





        </div >
    );
};

export default Services;
