import React from 'react';

// Components
import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Rutas
import { getPathByLabel } from '../../data/routes';

// Ejemplo de imagen (ajusta la ruta y el nombre del archivo a tu proyecto)
import laMancha from '../../assets/original_images/CastillaLaBuena_Reducida.jpg';
import landscape from '../../assets/original_images/CLM-LaBuena.png';

const Regional = () => {
    return (
        <div id="Regional">

            {/* Botón para volver a la sección de servicios */}
            <div className='padding-vertical-up-3'></div>
            <Button to={getPathByLabel('servicios')} className="button button-Servicios-Volver">
                Volver a servicios
            </Button>

            {/* Título principal */}
            <h1 className='padding-vertical-2 text-red large-text-title alinearEnColumna'>
                TRANSPORTE REGIONAL
            </h1>

            {/* Imagen de encabezado (opcional) */}
            <MediaPicture
                src={laMancha}
                alt="Paisaje de Castilla-La Mancha"
                className="picture-container picture-Regional"
            />

            <div className='padding-vertical-1'></div>

            {/* Sección de presentación */}
            <h1 className='text-red large-text-title negrita padding-vertical-down-1'>
                NUESTRO COMPROMISO EN CASTILLA-LA MANCHA
            </h1>
            <TextBox className='text-box text-body padding-vertical-2 text-box-Industrial-Intro'>
                Desde nuestras raíces, en <b>Transportes Fernández</b> hemos apostado por brindar soluciones
                de transporte <b>seguras</b> y <b>eficientes</b> a lo largo y ancho de <b> Castilla-La Mancha</b>. Gracias a nuestra amplia experiencia en rutas regionales, conocemos al detalle las vías más convenientes para transportar diferentes tipos de mercancías, optimizando tiempos de entrega y garantizando la integridad de cada carga.

            </TextBox>

            {/* Sección de ventajas del servicio regional */}
            <TextBox className='alinearEnColumna text-box text-box-Industrial-Intro text-body'>
                <h1 className='text-red large-text-title negrita padding-vertical-down-1'>
                    VENTAJAS DE NUESTRO SERVICIO REGIONAL
                </h1>
                <ul text-box-Aniversario-Timeline text-box text-body>
                    <li>
                        <b>Conocimiento profundo del territorio: </b>
                        Nuestras rutas en provincias como <i>Albacete, Ciudad Real, Cuenca, Guadalajara y Toledo </i> 
                        se planifican minuciosamente, reduciendo tiempos y costes.
                    </li>
                    <li>
                        <b>Flota adaptada: </b>
                        Contamos con vehículos de diferentes capacidades y equipados con sistemas de monitoreo
                        para cargas ligeras, pesadas o sobredimensionadas.
                    </li>
                    <li>
                        <b>Trato cercano y ágil: </b>
                        Al operar en un ámbito regional, podemos ofrecer un servicio más ágil y personalizado,
                        manteniendo una <b>comunicación fluida</b> con cada cliente.
                    </li>
                </ul>
            </TextBox>


            <h1 className='text-red large-text-title negrita padding-vertical-down-1'>
                UN ENFOQUE LOCAL Y RESPONSABLE
            </h1>

            <TextBox className='text-box text-body padding-vertical-2 text-box-Industrial-Intro'>
                Nuestra presencia en Castilla-La Mancha no se limita al transporte de materiales. También nos
                preocupamos por generar un impacto <b>positivo</b> en la región, colaborando con negocios locales
                y adoptando <b>prácticas sostenibles</b> que contribuyen al cuidado del entorno. Nos enorgullecemos
                de formar parte del tejido empresarial de la comunidad, promoviendo el desarrollo económico
                y social de la zona.

                <div className='padding-vertical-1'></div>

                En <b>Transportes Fernández</b>, entendemos que cada cliente requiere soluciones logísticas
                específicas. Por ello, nos adaptamos a las necesidades de cada proyecto para <b>garantizar
                    puntualidad</b>, <b>seguridad</b> y <b>eficiencia</b> en la entrega de sus productos.
            </TextBox>

            
            <div className='alinearEnColumna'>
                <Button to={getPathByLabel('contacto')} className={"button button-Servicios-Contacto"}>
                    CONTACTO
                </Button>
            </div>

            <div className='padding-vertical-1'></div>


            <MediaPicture
                src={landscape}
                alt="Paisaje Manechego"
                className="picture-container picture-Parques-Offshore"
            />
        </div>
    );
};

export default Regional;
