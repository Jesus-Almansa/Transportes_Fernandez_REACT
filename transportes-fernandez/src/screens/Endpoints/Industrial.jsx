import React from 'react';


// Components
import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Images
import tuberias from '../../assets/original_images/industrial_pipe.jpg';
import equipo from '../../assets/original_images/equipamientoIndustrial.jpeg';

// Rutas
import { getPathByLabel } from '../../data/routes';

const Industrial = () => {
    return (
        <div>

            {/* <h1>Industrial Endpoint</h1> */}

            <div className='padding-vertical-up-3'> </div>


            <Button to={getPathByLabel('servicios')} className={"button button-Servicios-Volver"}>
                Volver a servicios
            </Button>


            <h1 className='padding-vertical-2 text-red large-text-title alinearEnColumna'>TRANSPORTE INDUSTRIAL</h1>

            <TextBox className='alinearEnColumna text-box text-box-Industrial-Intro text-body'>
                En el entorno de la industria, cada minuto cuenta. Por ello, Transportes Fernández ofrece soluciones personalizadas para el transporte de maquinaria industrial y cargas de alta complejidad, brindando una respuesta eficaz a los requerimientos logísticos de empresas de diferentes sectores. Con décadas de experiencia, nos especializamos en el manejo de bienes que requieren un alto nivel de conocimiento técnico y un cuidado excepcional, asegurando que cada envío llegue a su destino de manera puntual y segura.
            </TextBox>

            <h1 className='padding-vertical-2 text-red large-text-title alinearEnColumna'>TIPOS DE CARGAS INDUSTRIALES</h1>

            <TextBox className='alinearEnColumna text-box text-box-Industrial-Intro text-body'>
                Nuestro servicio está diseñado para cubrir una amplia gama de cargas industriales:

                <ul className='text-box-Aniversario-Timeline  text-box text-body'>
                    <li><b>Maquinaria de gran envergadura:</b> prensas, calderas, turbinas y otros equipos pesados que requieren medios de transporte y manipulación específicos.</li>
                    <li><b>Líneas de producción y equipos completos:</b> ofrecemos la capacidad logística de trasladar sistemas industriales en bloque o por módulos, coordinando cada fase del proceso para minimizar interrupciones en tu producción.</li>
                    <li><b>Componentes especiales:</b> estructuras metálicas, tanques, paneles, piezas de repuesto y equipos delicados que necesitan una sujeción y protección adecuadas durante todo el trayecto.</li>
                </ul>

                Gracias a la versatilidad de nuestra flota y la capacitación de nuestro equipo, podemos gestionar desde cargas voluminosas hasta unidades delicadas de alta precisión, siempre garantizando los más altos estándares de calidad y seguridad.
            </TextBox>

            <MediaPicture
                src={tuberias}
                alt="toroMecanico"
                className="picture-container picture-Industrial-toroMecanico"
            />

            <h1 className='padding-vertical-2 text-red large-text-title alinearEnColumna'>LOGÍSTICA Y PLANIFICACIÓN</h1>

            <TextBox className='alinearEnColumna text-box text-box-Industrial-Intro text-body'>
                El éxito en el transporte industrial radica en una planificación detallada. En Transportes Fernández, llevamos a cabo:

                <ul className='text-box-Aniversario-Timeline  text-box text-body'>
                    <li><b>Análisis de requerimientos:</b> evaluamos el tipo de maquinaria, dimensiones, peso y complejidad de la carga.</li>
                    <li><b>Diseño de rutas seguras y eficientes:</b>  estudiamos carreteras, puentes, túneles y cualquier restricción o permiso necesario para cargas especiales.</li>
                    <li><b>Coordinación con el cliente:</b> mantenemos una comunicación fluida para adaptar calendarios de producción o entrega, evitando retrasos y reduciendo costos.</li>
                    <li><b>Tramitación de permisos:</b>  gestionamos la documentación exigida por las autoridades locales o internacionales para el transporte de mercancías especiales o sobredimensionadas.</li>
                </ul>

                Con esta metodología rigurosa, optimizamos cada etapa del envío y garantizamos la integridad de la maquinaria hasta su destino final.
            </TextBox>

            <div className='alinearEnColumna'>
                <Button to={getPathByLabel('contacto')} className={"button button-Servicios-Contacto"}>
                    CONTACTO
                </Button>
            </div>

            <div className='padding-vertical-1'></div>

            <MediaPicture
                src={equipo}
                alt="fachada"
                className="picture-container picture-Industrial-techo"
            />
        </div>
    );
};

export default Industrial;