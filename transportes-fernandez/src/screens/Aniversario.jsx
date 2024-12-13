import React from 'react';

import aniversario from '../assets/images/Logo-70Aniversario.png';

import MediaPicture from '../components/features/MediaPicture/MediaPicture';
import TextBox from '../components/layout/Box/TextBox';


const Aniversario = () => {
    return (
        <div>
            <h1 className='alinearEnColumna'>70 años de historia</h1>

            <div className="enLinea">
                <div className="izquierda">
                    <MediaPicture
                        src={aniversario}
                        alt="Descripción de la imagen"
                        className="picture-container picture-empresa-aniversario"
                    />

                </div>
                <div className='derecha'>
                    <TextBox className='text-box text-box-Empresa-aniversario'>
                        Somos una empresa especializada en el transporte de material industrial, con décadas de experiencia ofreciendo soluciones logísticas de alta calidad para grandes empresas del sector. Nos enfocamos exclusivamente en el transporte de maquinaria y materiales industriales, dejando de lado el transporte de paquetes pequeños, lo que nos permite garantizar un servicio altamente especializado, diseñado para cumplir con las necesidades específicas de nuestros clientes.

                        Trabajamos para construir una comunidad de personas comprometidas y profesionales, que valoran la excelencia y el crecimiento continuo, tanto a nivel personal como en su trabajo. Aspiramos a superar retos con dedicación, responsabilidad y calidad, siempre garantizando confianza, seguridad y satisfacción en cada servicio que ofrecemos.

                        Nuestro objetivo es posicionarnos como un proveedor premium, conocido por nuestra eficiencia, profesionalismo y resultados de calidad. Nos esforzamos por ofrecer un servicio serio, confiable y adaptado a los más altos estándares del sector. Bajo nuestro lema, "Lo primero es el cliente", reafirmamos nuestro compromiso de superar expectativas y construir relaciones sólidas basadas en la confianza y la satisfacción de quienes eligen trabajar con nosotros.
                    </TextBox>
                </div>
            </div>
        </div>
    );
};

export default Aniversario;