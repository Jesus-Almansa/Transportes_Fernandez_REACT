import React from 'react';
import { Link } from "react-router-dom";

// Componentes
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';
import Button from '../../components/features/Button/Button';

// Imágenes
import laMancha from '../../assets/original_images/regional.png';
import camionesFrontal from '../../assets/TransportersBranding/SEXIO/100/camiones.jpg';
import space from '../../assets/images/space.jpg';
import kamioneh from '../../assets/TransportersBranding/SOCIAL MEDIA POST/2-02.jpg';
import camionUnitario from '../../assets/TransportersBranding/SEXIO/100/camionUnitario.jpg';

// Rutas
import { getPathByLabel } from '../../data/routes';

function Empresa() {
  return (
    <div id="Empresa">

      <MediaPicture src={camionUnitario} alt="placeholder" className='picture-container ' />

      <h1 className='large-text-title padding-vertical-3 text-box-Home-IntroTitle'>
        <b>TRANSPORTES FERNÁNDEZ A DÍA DE HOY</b>
      </h1>
      <div className="enLinea">
        <div className="izquierda">

          <TextBox className=' text-body text-box text-box-Home-Intro'>
            Nos dedicamos al transporte de <b className='text-red'>material industrial</b>, contando con décadas de experiencia en la entrega de soluciones logísticas de primera calidad para grandes compañías del sector. Nuestro enfoque está exclusivamente en el traslado de maquinaria y materiales industriales, asegurando un servicio especializado y adaptado a las necesidades particulares de cada cliente.
          </TextBox>
        </div>
        <div className='derecha'>
          <MediaPicture
            src={camionesFrontal}
            alt="Descripción de la imagen"
            className="picture-container picture-Empresa-Hoy"
          />
        </div>
      </div>

      {/* RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN*/}
      <div id='Resumen' className="alinearEnColumna">
        <h1 className='large-text-title padding-vertical-4 text-box-Home-IntroTitle'>
          <b>NUESTROS OBJETIVOS</b>
        </h1>
        <div className="enLinea">
          <TextBox className="text-body text-box  text-box-Home-Intro">
            Trabajamos para construir una comunidad de personas comprometidas y profesionales, que valoran la excelencia y el crecimiento continuo, tanto a nivel personal como en su trabajo. Aspiramos a superar retos con <b>dedicación</b>, <b>responsabilidad</b> y <b>rigor</b>, siempre garantizando confianza, seguridad y satisfacción en cada servicio que ofrecemos.

            <div className="padding-vertical-1"></div>

            Aspiramos a ser reconocidos como un referente destacado en el sector, caracterizándonos por nuestra eficiencia, profesionalismo y resultados. Nos dedicamos a brindar un servicio serio, fiable y alineado con los más altos estándares de calidad. Con nuestro lema, <b>"Lo primero es el cliente"</b>, reafirmamos nuestro compromiso de superar expectativas y construir relaciones duraderas basadas en la satisfacción y el respeto mutuo.
          </TextBox>
        </div>
      </div>

      <div className="enLinea negrita">
        <Button to={getPathByLabel('servicios')} className={"button button-Empresa-Servicios negrita"}>
          SERVICIOS
        </Button>

        <div className="padding-vertical-1"></div>

        <Button to={getPathByLabel('contacto')} className={"button button-Empresa-Contacto"}>
          CONTACTO
        </Button>

      </div>

      <div className='padding-vertical-up-2'></div>

      <TextBox className='text-body text-box text-box-Home-Intro'>
        Cada proyecto que emprendemos es una oportunidad para demostrar nuestra pasión por lo que hacemos. Nos motiva la idea de marcar una diferencia real en la vida de nuestros clientes, ofreciendo soluciones innovadoras que no solo resuelven sus necesidades, sino que también superan sus expectativas. Con este enfoque, seguimos creciendo y construyendo una comunidad basada en valores sólidos, compromiso y una visión compartida de éxito.
      </TextBox>

      <div className='padding-vertical-up-2'></div>

      <MediaPicture
        src={kamioneh}
        alt="Descripción de la imagen"
        className="picture-container picture-Empresa-End"
      />

    </div>
  );
}

export default Empresa;
