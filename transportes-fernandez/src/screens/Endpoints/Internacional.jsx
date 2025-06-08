import React from 'react';

// Components
import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Rutas
import { getPathByLabel } from '../../data/routes';

// Imagenes
import suiza from '../../assets_prod/Endpoints/suiza.jpg';
import sky from '../../assets_prod/Endpoints/sky.jpg';

const Internacional = () => {
    return (
        <div id="Internacional">

            {/* Botón para volver a la sección de servicios */}
            <div className='padding-vertical-up-3'></div>
            <Button to={getPathByLabel('servicios')} className="button button-Servicios-Volver">
                Volver a servicios
            </Button>

            {/* Título principal */}
            <h1 className='padding-vertical-2 text-red large-text-title alinearEnColumna'>
                TRANSPORTE INTERNACIONAL
            </h1>

            {/* Imagen de encabezado */}
            <MediaPicture
                src={suiza}
                alt="Mapa de rutas internacionales"
                className="picture-container picture-Internacional"
            />

            <div className='padding-vertical-1'></div>

            {/* Sección de presentación */}
            <h1 className='text-red large-text-title negrita padding-vertical-down-1'>
                LLEVAMOS TU MERCANCÍA MÁS ALLÁ DE LAS FRONTERAS
            </h1>
            <TextBox className='text-box text-body padding-vertical-2 text-box-Industrial-Intro'>
                En <b>Transportes Fernández</b>, no solo conectamos España, sino que también ofrecemos
                soluciones de transporte <b>internacional</b> para facilitar el comercio y la logística 
                transfronteriza. Con una sólida infraestructura y experiencia en envíos a nivel europeo,
                aseguramos un servicio eficiente, adaptado a la normativa de cada país y con una logística 
                optimizada para minimizar tiempos y costos.

                <div className='padding-vertical-1'></div>

                Desde envíos industriales hasta maquinaria pesada y cargas especiales, gestionamos cada 
                proyecto con <b>precisión y compromiso</b>. Contamos con una red de rutas estratégicas
                que nos permite operar en países como <b>Francia, Alemania, Italia, Portugal y Suiza</b>, 
                garantizando entregas seguras y puntuales en cada destino.
            </TextBox>

            {/* Sección de ventajas del servicio internacional */}
            <TextBox className='alinearEnColumna text-box text-box-Industrial-Intro text-body'>
                <h1 className='text-red large-text-title negrita padding-vertical-down-1'>
                    VENTAJAS DE NUESTRO SERVICIO INTERNACIONAL
                </h1>
                <ul text-box-Aniversario-Timeline text-box text-body>
                    <li>
                        <b>Gestión integral de aduanas: </b>
                        Nos encargamos de toda la documentación y regulaciones necesarias para el tránsito 
                        de mercancías entre países, garantizando una operativa sin retrasos.
                    </li>
                    <li>
                        <b>Flota especializada para rutas internacionales: </b>
                        Contamos con vehículos preparados para largas distancias, equipados con tecnología de 
                        seguimiento GPS en tiempo real.
                    </li>
                    <li>
                        <b>Red logística optimizada: </b>
                        Diseñamos rutas estratégicas que agilizan el tránsito, evitando cuellos de botella en 
                        puntos críticos y optimizando la eficiencia de cada trayecto.
                    </li>
                    <li>
                        <b>Cargas seguras y aseguradas: </b>
                        Implementamos sistemas de sujeción avanzados y protocolos de seguridad para proteger 
                        la integridad de la mercancía durante todo el recorrido.
                    </li>
                </ul>
            </TextBox>

            <h1 className='text-red large-text-title negrita padding-vertical-down-1'>
                TRANSPORTE INTERNACIONAL SIN COMPLICACIONES
            </h1>

            <TextBox className='text-box text-body padding-vertical-2 text-box-Industrial-Intro'>
                En <b>Transportes Fernández</b>, entendemos los desafíos que implica mover mercancías a través 
                de diferentes países. Por eso, ofrecemos un servicio de <b>gestión integral</b> que abarca 
                desde la <b>planificación de rutas</b> hasta la coordinación con agentes de aduanas y autoridades 
                locales. Nuestro equipo experto se encarga de cada detalle para garantizar que las cargas lleguen 
                a su destino con <b>máxima puntualidad y seguridad</b>.

                <div className='padding-vertical-1'></div>

                Trabajamos con industrias de diversos sectores, incluyendo el <b>automotriz, construcción, 
                metalurgia y energías renovables</b>, adaptando nuestras soluciones a las necesidades específicas 
                de cada cliente. Nuestro compromiso es ofrecer una logística <b>transfronteriza fluida</b> y sin 
                interrupciones, manteniendo siempre los <b>más altos estándares de calidad</b>.
            </TextBox>

            {/* Botón de contacto */}
            <div className='alinearEnColumna'>
                <Button to={getPathByLabel('contacto')} className={"button button-Servicios-Contacto"}>
                    CONTACTO
                </Button>
            </div>

            <div className='padding-vertical-1'></div>

            {/* Imagen final */}
            <MediaPicture
                src={sky}
                alt="Camión cruzando fronteras"
                className="picture-container picture-Parques-Offshore"
            />
        </div>
    );
};

export default Internacional;