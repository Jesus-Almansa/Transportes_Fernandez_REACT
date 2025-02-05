import React, { useEffect, useRef } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

// Components
import Button from '../../components/features/Button/Button';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';

// Imágenes
import jesus from '../../assets/original_images/dev.jpg';

const Developer = () => {

    const hasAlerted = useRef(false); // Tracks if alert has been shown

    useEffect(() => {
        if (!hasAlerted.current) {
            Swal.fire({
                title: "¡Has encontrado la página secreta!",
                text: "En primer lugar, si has llegado hasta aquí enhorabuena, has encontrado la página secreta de nuestro desarrollador.",
                icon: "info",
                confirmButtonText: "Genial"
            });

            hasAlerted.current = true; // Prevents duplicate alerts
        }
    }, []);

    return (
        <div>
            <h1 className="large-text-title padding-vertical-3 text-box-Home-IntroTitle">JESÚS TOMÁS ALMANSA FERNÁNDEZ</h1>

            <div className="alinearEnColumna">
                <div className="enLinea">
                    <div className="izquierda">
                        <MediaPicture
                            src={jesus}
                            alt="Jose María Fernández"
                            className="picture-container picture-Jesus"
                        />
                    </div>
                    <div className='derecha'>
                        <TextBox className='text-box text-box-Developer-jesus text-body'>
                            <strong className='text-red'>Jose María </strong> es el socio fundador original de Transportes Fernández. Con más de 40 años de experiencia en el sector del transporte, ha sido el motor de la empresa desde sus inicios. Su visión y liderazgo han sido fundamentales para el crecimiento y consolidación de la compañía, que ha pasado de ser un pequeño negocio familiar a convertirse en una de las empresas de transporte más reconocidas de la región.
                        </TextBox>
                    </div>
                </div>
            </div>

            <div className='padding-vertical-4'></div>
        </div>
    );
}

export default Developer;