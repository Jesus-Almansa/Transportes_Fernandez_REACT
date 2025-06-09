import React, { useEffect, useRef } from "react";
import Notiflix from "notiflix";

// Estilos de la alerta
import "../../components/features/Notiflix/Notiflix.css";

// Components
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Imágenes
import jesus from '../../assets_prod/Endpoints/dev.jpg';
import header from '../../assets_prod/Endpoints/header.jpg';
import sim from '../../assets_prod/Endpoints/sim.jpg';
import earlyBody from '../../assets_prod/Endpoints/earlyBody.jpg';
import finalBody from '../../assets_prod/Endpoints/finalBody.jpg';
import inferencia from '../../assets_prod/Endpoints/inferencia.jpg';

const Developer = () => {
    // We'll only show the alert once
    const hasAlerted = useRef(false);

    useEffect(() => {
        // 2) Initialize Notiflix with just the custom className
        // (we don't inline style, so our CSS can override everything)
        Notiflix.Report.init({
            className: "my-custom-report"
        });

        // 3) Fire the alert once
        if (!hasAlerted.current) {
            Notiflix.Report.info(
                "¡Has encontrado la página secreta!",
                "Enhorabuena, bienvenido a mi CV secreto dentro de la web de Transportes Fernández. Aquí puedes encontrar información sobre mi experiencia y habilidades como desarrollador.",
                "Next"
            );
            hasAlerted.current = true;
        }
    }, []);


    return (
        <div>


            <h1 className="large-text-title padding-vertical-3 text-box-Home-IntroTitle">
                JESÚS TOMÁS ALMANSA FERNÁNDEZ
            </h1>

            <div className="alinearEnColumna">
                <div className="enLinea">
                    <div className="izquierda">
                        <MediaPicture
                            src={jesus}
                            alt="Jesus Tomás Almansa Fernández"
                            className="picture-container picture-Jesus"
                        />
                    </div>
                    <div className="derecha">
                        <TextBox className="text-box text-box-Developer-jesus text-body">

                            Mi trabajo se sitúa en la intersección entre la inteligencia artificial, los datos y la ciberseguridad. Actualmente me desempeño como Data Scientist, donde diseño y desarrollo soluciones inteligentes para problemas complejos del mundo real.

                            <br /><br />

                            Mi formación como ingeniero industrial me ha proporcionado una visión global, sistémica y estructurada de los problemas técnicos. Gracias a ella, puedo abordar desafíos complejos no solo desde una perspectiva algorítmica, sino también teniendo en cuenta aspectos prácticos como la viabilidad técnica, la eficiencia energética o la integración con sistemas industriales. Esta base me permite comunicarme con equipos multidisciplinares y entender el contexto físico de los datos que utilizo en mis modelos.
                        </TextBox>
                    </div>
                </div>
            </div>

            <div className="padding-vertical-1"></div>

            <TextBox className="text-box text-box-Home-Intro text-body">


                Algunos de los proyectos más relevantes en los que he trabajado incluyen la detección de anomalías en plataformas eólicas marinas y la detección de cambios en el terreno a partir de imágenes satelitales. Estos desafíos requieren no solo modelos de machine learning robustos, sino también una comprensión profunda de los patrones temporales y la integridad de las señales.

                <br /><br />

                <div className="enLinea">
                    <div className="izquierda">
                        <MediaPicture
                            src={inferencia}
                            alt="Jesus Tomás Almansa Fernández"
                            className="picture-container picture-Jesus"
                        />
                    </div>
                </div>

                <br /><br />

                Paralelamente, mi interés por la inteligencia artificial va mucho más allá del ámbito profesional: es una verdadera vocación que me empuja a estar al día de los últimos avances y a experimentar con nuevas metodologías. Me siento especialmente cómodo trabajando con modelos como los transformers, ideales para el análisis de datos secuenciales; redes neuronales gráficas, que permiten representar relaciones complejas de forma estructurada; y técnicas de reconstrucción 3D con información semántica, útiles para interpretar espacios físicos en entornos dinámicos. Pero más allá de lo académico, lo que más valoro es poder aplicar estas herramientas a problemas reales, donde cada decisión cuenta y la fiabilidad del modelo marca la diferencia.

                <br /><br />

                También cuento con experiencia práctica en tecnologías que facilitan el desarrollo completo de soluciones de inteligencia artificial. Utilizo Docker para mantener entornos de trabajo consistentes y escalables, trabajo con ROS2 para conectar sensores y controlar dispositivos en proyectos de robótica, y tengo soltura en entornos fullstack que me permiten construir interfaces interactivas para visualizar resultados y facilitar su interpretación. Esta combinación de conocimientos me permite abordar proyectos de forma integral, desde la recogida y preparación de los datos hasta el despliegue y mantenimiento del sistema en producción.


                <br /><br />

                <div className="enLinea">
                    <div className="izquierda">
                        <MediaPicture
                            src={sim}
                            alt="Jesus Tomás Almansa Fernández"
                            className="picture-container picture-Jesus"
                        />
                    </div>
                </div>

                <br /><br />

                <div className="enLinea">
                    <div className="izquierda">
                        <MediaPicture
                            src={earlyBody}
                            alt="Jesus Tomás Almansa Fernández"
                            className="picture-container picture-Jesus"
                        />
                    </div>
                    <div className="derecha">
                        <MediaPicture
                            src={finalBody}
                            alt="Jesus Tomás Almansa Fernández"
                            className="picture-container picture-Jesus"
                        />
                    </div>
                </div>

                <br /><br />

                Creo firmemente en el aprendizaje continuo, la colaboración abierta y en construir tecnología que tenga un impacto real y positivo. Mi objetivo no es solo que la tecnología funcione, sino que aporte valor, sea ética y esté al servicio de las personas.
            </TextBox>


            <div className="padding-vertical-3"></div>


            <MediaPicture
                src={header}
                alt="cabesera"
                className="picture-container"
            />
        </div>
    );
}

export default Developer;