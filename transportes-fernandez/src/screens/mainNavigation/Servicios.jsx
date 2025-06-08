import React from 'react';
import { Link } from "react-router-dom";

import { getPathByLabel } from '../../data/routes';

// Componentes
import MediaPicture from '../../components/features/MediaPicture/MediaPicture.jsx';
import FlipCard from '../../components/features/FlipCard/FlipCard.jsx';

// Imágenes
import laMancha from '../../assets_prod/Inicio/laMancha.jpg';
import valencia from '../../assets_prod/Inicio/valencia.jpg';
import internacional from '../../assets_prod/Inicio/space.png';

import equipamientoIndustrial from '../../assets_prod/Inicio/equipamienoIndustrial.jpg';
import parquesEolicos from '../../assets_prod/Inicio/parquesEolicos.jpg';
import medidasEspeciales from '../../assets_prod/Inicio/medidasEspeciales.jpg'; 

import panoramica from '../../assets_prod/Servicios/_DSC7901-Pano.jpg';


// Iconos
import iconoLaMancha from '../../assets_prod/iconos/1/icons-72.png';
import iconoValencia from '../../assets_prod/iconos/1/icons-73.png';
import iconoInternacional from '../../assets_prod/iconos/1/icons-74.png';
import iconoIndustrial from '../../assets_prod/iconos/1/icons-75.jpg';
import iconoEolico from '../../assets_prod/iconos/1/icons-76.png';
import iconoEspecial from '../../assets_prod/iconos/1/icons-77.png';

const Servicios = () => {
    return (
        <div id='Servicios'>

            <div className="alinearEnColumna">
                <MediaPicture src={panoramica} alt="guacala" className='picture-container picture-Servicios-Panoramica' />
            </div>

            <div className="alinearEnColumna">
                <div className="enLinea text-body">
                    <FlipCard
                        frontImage={equipamientoIndustrial}
                        backText={"Equipamiento industrial"}
                        icon={
                            <Link to={getPathByLabel("industrial")}>
                                <img src={iconoIndustrial} alt='iconIndustrial' />
                            </Link>}
                    />
                    <FlipCard
                        frontImage={parquesEolicos}
                        backText="Parques eólicos"
                        icon={
                            <Link to={getPathByLabel("parques")}>
                                <img src={iconoEolico} alt='iconEolico' />
                            </Link>}
                    />
                    <FlipCard
                        frontImage={medidasEspeciales}
                        backText="Medidas especiales"
                        icon={
                            <Link to={getPathByLabel("especiales")}>
                                <img src={iconoEspecial} alt='iconEspecial' />
                            </Link>}
                    />
                </div>
            </div>

            <div className='padding-vertical-0' ></div>

            <div className="alinearEnColumna">
                <div className="enLinea text-body">
                    <FlipCard
                        frontImage={laMancha}
                        backText={"Transporte regional en La Mancha"}
                        icon={
                            <Link to={getPathByLabel("regional")}>
                                <img src={iconoLaMancha} alt='iconLaMancha' />
                            </Link>}
                    />
                    <FlipCard
                        frontImage={valencia}
                        backText="Transporte por toda la península e islas"
                        icon={
                            <Link to={getPathByLabel("nacional")}>
                                <img src={iconoValencia} alt='iconValencia' />
                            </Link>}
                    />
                    <FlipCard
                        frontImage={internacional}
                        backText="Transporte a nivel internacional"
                        icon={
                            <Link to={getPathByLabel("internacional")}>
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

export default Servicios;
