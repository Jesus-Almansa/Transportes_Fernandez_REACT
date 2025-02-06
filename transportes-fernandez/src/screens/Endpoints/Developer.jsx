import React, { useEffect, useRef } from "react";
import Notiflix from "notiflix";

// Estilos de la alerta
import "../../components/features/Notiflix/Notiflix.css";

// Components
import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Imágenes
import jesus from '../../assets/original_images/dev.jpg';
import header from '../../assets/original_images/header.png';

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
                "OK masao "
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
                            alt="Jose María Fernández"
                            className="picture-container picture-Jesus"
                        />
                    </div>
                    <div className="derecha">
                        <TextBox className="text-box text-box-Developer-jesus text-body">
                            I'm an Industrial Electronics and Automation Engineer graduated from the Polytechnic University of Valencia, and I hold a Master's in Artificial Intelligence from the International University of La Rioja. Currently, I work as an Data Scientist, where I develop innovative solutions using machine learning and deep learning to tackle complex challenges, such as detecting anomalies in offshore wind platforms and land change detection with satellite image analysis.
                        </TextBox>
                    </div>
                </div>
            </div>

            <div className="padding-vertical-4"></div>

            <MediaPicture
                src={header}
                alt="Jose María Fernández"
                className="picture-container picture-Jesus"
            />
        </div>
    );
}

export default Developer;