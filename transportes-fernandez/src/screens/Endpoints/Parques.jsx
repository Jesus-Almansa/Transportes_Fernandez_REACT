import React from 'react';

// Components
import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Imágenes (reemplaza con las rutas reales de tus imágenes)
import parqueEolico1 from '../../assets/original_images/ground_windturbine.jpg';
import offshoreWindturbine from '../../assets/original_images/offshore_windturbine.jpg';
import landscape from '../../assets/original_images/landscape_windturbine.jpg';

// Rutas
import { getPathByLabel } from '../../data/routes';

const parques = () => {
    return (
        <div>

            {/* Botón para volver a servicios */}
            <div className='padding-vertical-up-3'> </div>
            <Button to={getPathByLabel('servicios')} className="button button-Servicios-Volver">
                Volver a servicios
            </Button>

            {/* Título principal */}
            <h1 className='padding-vertical-2 text-red large-text-title alinearEnColumna'>
                PARQUES EÓLICOS
            </h1>

            {/* Introducción */}
            <TextBox className='alinearEnColumna text-box text-box-Industrial-Intro text-body'>
                La energía eólica se ha convertido en uno de los pilares fundamentales de la transición hacia energías limpias. En Transportes Fernández comprendemos que la logística de los repuestos para el mantenimiento de los parques eólicos puede ser compleja, por lo que proporcionamos soluciones especializadas para el transporte de estas piezas. Gracias a nuestro equipo experto y a una flota versátil, garantizamos que cada envío llegue de manera segura, eficiente y cumpliendo los más altos estándares de calidad, contribuyendo así a la operación continua y confiable de los parques eólicos.
            </TextBox>


            {/* Imagen 1 */}
            <MediaPicture
                src={parqueEolico1}
                alt="Parque Eólico 1"
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
                        <b>Coordinación con proveedores y autoridades:</b> tramitamos permisos especiales para cargas sobredimensionadas y mantenemos comunicación constante con los equipos de montaje e instalación.
                    </li>
                    <li>
                        <b>Optimización de tiempos:</b> diseñamos calendarios de entrega e instalación para evitar retrasos y optimizar la operatividad del proyecto.
                    </li>
                    <li>
                        <b>Gestión integral de riesgos:</b> nuestra metodología incluye planes de contingencia, asegurando el cumplimiento de normas de seguridad y estándares ambientales.
                    </li>
                </ul>
                De esta forma, nos aseguramos de que cada pieza llegue a su destino en perfectas condiciones y a tiempo, facilitando la implementación exitosa de tu parque eólico.
            </TextBox>

            {/* Imagen 2 */}
            <MediaPicture
                src={landscape}
                alt="Parque Eólico 2"
                className="picture-container picture-Parques-Offshore"
            />
        </div>
    );
};

export default parques;
