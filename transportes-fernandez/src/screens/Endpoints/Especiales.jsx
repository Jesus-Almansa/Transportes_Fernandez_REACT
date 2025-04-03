import React from 'react';

// Components
import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Imágenes (reemplaza con las rutas reales de tus imágenes)
import techoIndustrial from '../../assets/TransportersBranding/SEXIO/100/techo.jpg';
import toroMecanico from '../../assets/TransportersBranding/SEXIO/100/toroMecanico.jpg';

// Rutas
import { getPathByLabel } from '../../data/routes';

const especiales = () => {
    return (
        <div>

            {/* Botón para volver a servicios */}
            <div className='padding-vertical-up-3'> </div>
            <Button to={getPathByLabel('servicios')} className="button button-Servicios-Volver">
                Volver a servicios
            </Button>

            {/* Título principal */}
            <h1 className='padding-vertical-2 text-red large-text-title alinearEnColumna'>
                TRANSPORTE DE MEDIDAS ESPECIALES
            </h1>

            {/* Introducción */}
            <TextBox className='alinearEnColumna text-box text-box-Industrial-Intro text-body'>
                El traslado de tuberías industriales, cargas largas (hasta 8 metros) y también de maquinaria o vehículos de gran tamaño requiere algo más que el equipo adecuado: se precisa de una cuidadosa planificación para minimizar riesgos y costos. En Transportes Fernández nos especializamos en este tipo de operaciones y contamos con la experiencia y la infraestructura necesarias para asegurar que tus entregas lleguen a tiempo y sin contratiempos.
            </TextBox>


            {/* Imagen 1 */}
            <MediaPicture
                src={toroMecanico}
                alt="Toro Mecánico"
                className="picture-container picture-Parques-Eolicos"
            />

            <div className='padding-vertical-up-1'> </div>

            {/* Logística y planificación */}
            <h1 className='padding-vertical-3 text-red large-text-title alinearEnColumna'>
                LOGÍSTICA Y PLANIFICACIÓN
            </h1>

            <TextBox className='alinearEnColumna text-box text-box-Industrial-Intro text-body'>
                Sabemos que el éxito en la puesta en marcha de un parque eólico depende de una planificación rigurosa y una ejecución impecable. Por ello, en Transportes Fernández llevamos a cabo:
                <ul className='text-box-Aniversario-Timeline text-box text-body'>
                    <li>
                        <b>Flota especializada:</b> disponemos de camiones y plataformas diseñadas para soportar la longitud y el peso de cargas y vehículos de gran tamaño, manteniendo su integridad durante todo el trayecto.
                    </li>
                    <li>
                        <b>Operadores expertos:</b> nuestro personal está capacitado para la manipulación de cargas que exceden las medidas convencionales, reduciendo al mínimo los riesgos de daños.
                    </li>
                    <li> <b>Planificación de rutas:</b> analizamos carreteras, puentes y accesos para elegir el trayecto más seguro y eficiente, evitando obstáculos como curvas cerradas o restricciones de altura.
                    </li>
                </ul>

                De esta manera, nos aseguramos de que cada componente llegue a su destino en perfectas condiciones y dentro de los plazos establecidos, contribuyendo al éxito de tus proyectos de gran envergadura.
            </TextBox>

            <div className='padding-vertical-up-1'> </div>

            <div className='alinearEnColumna'>
                <Button to={getPathByLabel('contacto')} className={"button button-Servicios-Contacto"}>
                    CONTACTO
                </Button>
            </div>

            <div className='padding-vertical-1'></div>

            <MediaPicture
                src={techoIndustrial}
                alt="Techo Industrial"
                className="picture-container picture-Parques-Offshore"
            />
        </div>
    );
};

export default especiales;
