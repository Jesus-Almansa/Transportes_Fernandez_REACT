import React from 'react';

// Images
import aniversario from '../../assets_prod/Endpoints//Logo-70Aniversario.png';


// Componentes
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';


const Aniversario = () => {
    return (
        <div>

            <h1 className='alinearEnColumna large-text-title text-red negrita padding-vertical-3'>CERCA DEL SIGLO DE HISTORIA</h1>

            <div className="enLinea">
                <div className="izquierda">



                    <MediaPicture
                        src={aniversario}
                        alt="Descripción de la imagen"
                        className="picture-container picture-aniversario"
                    />

                </div>
                <div className='derecha'>


                    <TextBox className='text-body text-box text-box-Aniversario-Intro'>

                        <div className='alinearEnColumna padding-vertical-down-3 negrita text-red'>
                            UN LEGADO DE CONFIANZA Y EXCELENCIA
                        </div>
                        En 2024, Transportes Fernández celebra setenta años ininterrumpidos de servicio en el sector del transporte especializado. Este hito histórico nos llena de orgullo y gratitud, pues representa el fruto de la dedicación de varias generaciones de profesionales y la confianza de quienes han depositado en nuestras manos la seguridad de sus proyectos.


                    </TextBox>
                </div>
            </div>

            <div className='alinearEnColumna text-title text-red negrita padding-vertical-3'>
                FUNDACIÓN Y MISIÓN
            </div>

            <TextBox className='text-body text-box text-box-Aniversario-Main'>
                Corría el año 1954 cuando nuestros fundadores, motivados por la visión de crear un servicio de transporte confiable y cercano, sentaron las bases de lo que hoy conocemos como Transportes Fernández. Desde entonces, cada año ha sido una oportunidad para perfeccionar nuestros métodos y evolucionar junto a los cambios del mercado.
                A lo largo de estos 70 años, hemos crecido y evolucionado junto a nuestros clientes, ampliando la flota de vehículos y adaptándonos a las exigencias de un entorno cada vez más tecnológico y competitivo.

                <div className='padding-vertical-1'></div>

                Cada generación de profesionales ha aportado su conocimiento y visión, integrando nuevos métodos de planificación y supervisión que garantizan la seguridad y eficacia de nuestros servicios. Este aniversario simboliza no solo el orgullo de un legado bien cimentado, sino también el inicio de una nueva etapa llena de proyectos ambiciosos, en la que continuaremos trabajando para ofrecer un transporte fiable y de vanguardia.
            </TextBox>

            <div className='alinearEnColumna text-title text-red negrita padding-vertical-3'>
                LÍNEA DE TIEMPO
            </div>

            <ul className='text-box text-box-Aniversario-Timeline  text-body'>
                <li>1954 -  Fundación de Transportes Fernández, con un pequeño equipo y una gran determinación.</li>
                <li>1960-1970: Consolidación de la empresa en el transporte local y primeros proyectos de gran envergadura</li>
                <li>1980: Incorporación de tecnologías de seguimiento y mejoras en los procesos logísticos.</li>
                <li>2000 - Digitalización. Adquisición de los primeros ordenadores.</li>
                <li>Siglo XXI: Modernización continua con la adquisición de vehículos especializados y adopción de sistemas avanzados de monitoreo.</li>
                <li>2024 - Celebración del 70 aniversario de Transportes Fernández, con un compromiso renovado con la excelencia y la innovación.</li>
            </ul>

            <div className='alinearEnColumna text-title text-red negrita padding-vertical-3'>
                EL FACTOR HUMANO
            </div>

            <TextBox className='text-box text-body text-box-Aniversario-Main'>
                Uno de nuestros mayores logros es haber construido un equipo que trasciende las generaciones, donde la experiencia de los más veteranos se fusiona con las ideas frescas de los nuevos talentos. Son ellos quienes, día tras día, garantizan la excelencia en cada operación, atendiendo las necesidades de nuestros clientes con compromiso y esmero.
            </TextBox>

        </div>
    );
};

export default Aniversario;