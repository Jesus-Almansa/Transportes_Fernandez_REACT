import React from 'react';

// Components
import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Rutas
import { getPathByLabel } from '../../data/routes';

// Imágenes de ejemplo (modifica las rutas y nombres según tu proyecto)
import puigCampana from '../../assets/original_images/puigCampana.png';
import ciutatVella from '../../assets/original_images/CiutatVella.jpg';

const Nacional = () => {
    return (
        <div id="Nacional">

            {/* Botón para volver a la sección de servicios */}
            <div className='padding-vertical-up-3'></div>
            <Button to={getPathByLabel('servicios')} className="button button-Servicios-Volver">
                Volver a servicios
            </Button>

            {/* Título principal */}
            <h1 className='padding-vertical-2 text-red large-text-title alinearEnColumna'>
                TRANSPORTE NACIONAL
            </h1>

            {/* Imagen de encabezado (opcional) */}
            <MediaPicture
                src={ciutatVella}
                alt="Paisaje de España"
                className="picture-container picture-Nacional"
            />

            <div className='padding-vertical-1'></div>

            {/* Sección de presentación */}
            <h1 className='text-red large-text-title negrita padding-vertical-down-1'>
                NUESTRO COMPROMISO EN TODO EL TERRITORIO ESPAÑOL
            </h1>
            <TextBox className='text-box text-body padding-vertical-2 text-box-Industrial-Intro'>
                En <b>Transportes Fernández</b>, llevamos décadas conectando diferentes regiones de España con soluciones de transporte <b>ágiles</b> y <b>fiables</b>. Nuestros orígenes se remontan a la <b>Comunidad Valenciana</b>, donde comenzamos realizando la mayoría de nuestros envíos gracias a la pujante actividad industrial y comercial de la zona.

                <div className='padding-vertical-1'></div>

                Con el tiempo, hemos ampliado nuestro alcance a otros destinos clave como <b>Murcia</b> y <b>Madrid</b>, sin descuidar nunca la calidad y eficiencia que nos distinguen. Nuestra capacidad de adaptación nos permite gestionar rutas estratégicas que favorecen tiempos de tránsito reducidos y una logística optimizada para cada tipo de carga. Gracias a nuestra experiencia en cada territorio, conocemos de primera mano las particularidades de cada ruta, anticipándonos a posibles desafíos y ajustando cada trayecto para maximizar la seguridad y rentabilidad del transporte. De este modo, <b>garantizamos</b> que las mercancías lleguen siempre en las <b>mejores condiciones</b>, cumpliendo con los plazos y expectativas de nuestros clientes.

            </TextBox>

            {/* Sección de ventajas del servicio nacional */}
            <TextBox className='alinearEnColumna text-box text-box-Industrial-Intro text-body'>
                <h1 className='text-red large-text-title negrita padding-vertical-down-1'>
                    VENTAJAS DE NUESTRO SERVICIO NACIONAL
                </h1>
                <ul text-box-Aniversario-Timeline text-box text-body>
                    <li>
                        <b>Cobertura integral: </b>
                        Operamos en todo el territorio español, incluyendo zonas urbanas, rurales y puertos,
                        ofreciendo rutas adaptadas a las necesidades de cada cliente.
                    </li>
                    <li>
                        <b>Infraestructura sólida: </b>
                        Nuestra flota cuenta con vehículos de diferentes capacidades y equipados con
                        <b> monitorización en tiempo real</b> para un control constante del envío.
                    </li>
                    <li>
                        <b>Experiencia contrastada: </b>
                        Conocemos los requisitos legales y logísticos de cada zona,
                        reduciendo trámites y asegurando un transporte <b>eficiente</b>.
                    </li>
                </ul>
            </TextBox>

            <h1 className='text-red large-text-title negrita padding-vertical-down-1'>
                UNA RED LOGÍSTICA EFICIENTE Y CONECTADA
            </h1>

            <TextBox className='text-box text-body padding-vertical-2 text-box-Industrial-Intro'>
                En <b>Transportes Fernández</b>, garantizamos un servicio de transporte <b>rápido</b> y <b>seguro</b>,
                con una red logística optimizada que nos permite operar en todo el territorio nacional.
                Nuestra experiencia en el sector nos ha permitido establecer <b>rutas estratégicas</b> que agilizan
                el tránsito entre comunidades autónomas clave, facilitando una distribución eficiente y puntual.

                <div className='padding-vertical-1'></div>

                Contamos con una flota moderna y diversa que nos permite adaptarnos a diferentes tipos de carga,
                ya sea <b>mercancía voluminosa</b>, <b>material industrial</b> o <b>envíos de alto valor</b>.
                Además, implementamos <b>tecnologías de rastreo</b> y planificación avanzada para asegurar que
                cada trayecto sea el más eficiente posible. Nuestro compromiso es claro:
                ofrecer una logística nacional conectada, sin interrupciones y con la <b>máxima fiabilidad</b>.
            </TextBox>


            <div className='alinearEnColumna'>
                <Button to={getPathByLabel('contacto')} className={"button button-Servicios-Contacto"}>
                    CONTACTO
                </Button>
            </div>

            <div className='padding-vertical-1'></div>

            <MediaPicture
                src={puigCampana}
                alt="Camión de Transportes Fernández en ruta por España"
                className="picture-container picture-Parques-Offshore"
            />
        </div>
    );
};

export default Nacional;
