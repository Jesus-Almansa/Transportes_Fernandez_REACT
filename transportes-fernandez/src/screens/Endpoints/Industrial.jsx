import React from 'react';


// Components
import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Images
import madreNiño from '../../assets/TransportersBranding/SEXIO/100/techo.jpg';

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

            <TextBox className='alinearEnColumna text-box-Industrial-Intro text-body'>
                En el entorno de la industria, cada minuto cuenta. Por ello, Transportes Fernández ofrece soluciones personalizadas para el transporte de maquinaria industrial y cargas de alta complejidad, brindando una respuesta eficaz a los requerimientos logísticos de empresas de diferentes sectores. Con décadas de experiencia, nos especializamos en el manejo de bienes que requieren un alto nivel de conocimiento técnico y un cuidado excepcional, asegurando que cada envío llegue a su destino de manera puntual y segura.
            </TextBox>

            <h1 className='padding-vertical-2 text-red large-text-title alinearEnColumna'>TIPOS DE CARGAS INDUSTRIALES</h1>

            <TextBox className='alinearEnColumna text-box text-box-Industrial-Intro text-body'>
                Nuestro servicio está diseñado para cubrir una amplia gama de cargas industriales:

                <ul className='text-box-Aniversario-Timeline  text-box text-body'>
                    <li><b>Maquinaria de gran envergadura:</b> prensas, calderas, turbinas y otros equipos pesados que requieren medios de transporte y manipulación específicos..</li>
                    <li><b>Líneas de producción y equipos completos:</b> ofrecemos la capacidad logística de trasladar sistemas industriales en bloque o por módulos, coordinando cada fase del proceso para minimizar interrupciones en tu producción.</li>
                    <li><b>Componentes especiales:</b> estructuras metálicas, tanques, paneles, piezas de repuesto y equipos delicados que necesitan una sujeción y protección adecuadas durante todo el trayecto.</li>
                </ul>

                Gracias a la versatilidad de nuestra flota y la capacitación de nuestro equipo, podemos gestionar desde cargas voluminosas hasta unidades delicadas de alta precisión, siempre garantizando los más altos estándares de calidad y seguridad.
            </TextBox>

            <h1 className='padding-vertical-2 text-red large-text-title alinearEnColumna'>LOGÍSTICA Y PLANIFICACIÓN</h1>

            <MediaPicture
                src={madreNiño}
                alt="fachada"
                className="picture-container picture-Contacto"
            />
        </div>
    );
};

export default Industrial;