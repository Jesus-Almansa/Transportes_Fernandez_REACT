import React from 'react';
import { Link } from "react-router-dom";

// Componentes
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import TextBox from '../../components/layout/Box/TextBox';
import Button from '../../components/features/Button/Button';

// Imágenes
import camionUnitario from '../../assets/TransportersBranding/SEXIO/Editadas/Empresa/camionUnitario.jpg';
import camionesFrontal from '../../assets/TransportersBranding/SEXIO/Editadas/Empresa/camiones.jpg';
import kamioneh from '../../assets/TransportersBranding/SEXIO/Editadas/Empresa/2-02.jpg';


// Rutas
import { getPathByLabel } from '../../data/routes';

function Empresa() {
  return (
    <div id="Empresa">

      <MediaPicture src={camionUnitario} alt="placeholder" className='picture-container ' />

      <h1 className='large-text-title padding-vertical-4 text-box-Home-IntroTitle'>
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

      <div className='padding-vertical-1'></div>

      <TextBox className='text-body text-box text-box-Empresa-Main'>
        A lo largo de más de medio siglo, Transportes Fernández ha mantenido un firme compromiso con la eficiencia y la calidad en el traslado de materiales industriales. Hoy, seguimos evolucionando para responder a los desafíos que plantean la innovación tecnológica y las demandas logísticas del mercado global. Nuestra experiencia nos ha permitido diseñar procesos específicos para la manipulación, carga y transporte de maquinaria pesada, componentes de gran envergadura y soluciones industriales complejas, siempre garantizando un servicio a la altura de las expectativas de nuestros clientes.

        <div className='padding-vertical-1'></div>

        Nuestro enfoque está centrado exclusivamente en los sectores industriales, lo que nos brinda la posibilidad de afinar cada detalle, desde la planificación de rutas hasta la supervisión constante de la mercancía. El resultado es un servicio altamente especializado, capaz de afrontar retos de gran complejidad y de ofrecer la tranquilidad de saber que cada proyecto está en manos de profesionales dedicados.
      </TextBox>

      {/* RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN*/}
      <div id='Resumen' className="alinearEnColumna">
        <h1 className='large-text-title padding-vertical-3 text-box-Home-IntroTitle'>
          <b>NUESTROS OBJETIVOS</b>
        </h1>
        <div className="enLinea">
          <TextBox className="text-body text-box  text-box-Empresa-Main">
            Trabajamos para construir una comunidad de personas comprometidas y profesionales, que valoran la excelencia y el crecimiento continuo, tanto a nivel personal como en su trabajo. Aspiramos a superar retos con <b>dedicación</b>, <b>responsabilidad</b> y <b>rigor</b>, siempre garantizando confianza, seguridad y satisfacción en cada servicio que ofrecemos.

            <div className="padding-vertical-1"></div>

            Buscamos crear una cultura de colaboración y excelencia, donde cada miembro de nuestro equipo sienta la responsabilidad de ofrecer un servicio de primer nivel. Nos impulsa el deseo de dar respuestas rápidas y seguras a las necesidades de las empresas que confían en nosotros, ayudándolas a optimizar sus cadenas de suministro y a cumplir con sus plazos de producción.

            Creemos firmemente que <b>"Lo primero es el cliente"</b>. Por ello, nuestros objetivos se centran en:
          </TextBox>
        </div>

        <ul className='text-box-Aniversario-Timeline  text-body'>
          <li>Innovación continua en sistemas de monitoreo y gestión logística.</li>
          <li>Formación y desarrollo profesional de nuestro equipo humano.</li>
          <li>Mantenimiento de estándares de seguridad y calidad cada vez más rigurosos.</li>
          <li>Respeto al medioambiente, integrando prácticas sostenibles en nuestras operaciones.</li>
        </ul>
      </div>

      <div className='padding-vertical-up-2'></div>

      <div className='padding-vertical-up-1'></div>

      <TextBox className='text-body text-box text-box-Empresa-Main'>
        Cada proyecto que emprendemos es una oportunidad para demostrar nuestra pasión por lo que hacemos. Nos motiva la idea de marcar una diferencia real en la vida de nuestros clientes, ofreciendo soluciones innovadoras que no solo resuelven sus necesidades, sino que también superan sus expectativas. Con este enfoque, seguimos creciendo y construyendo una comunidad basada en valores sólidos, compromiso y una visión compartida de éxito.
      </TextBox>

      <h1 className='large-text-title padding-vertical-3 text-box-Home-IntroTitle'>
        <b>VISIÓN A FUTURO</b>
      </h1>

      <TextBox className='text-body text-box text-box-Empresa-Main'>
        Para cada proyecto que emprendemos, concebimos soluciones que no solo aborden los requerimientos inmediatos de nuestros clientes, sino que también sienten las bases de una relación de confianza a largo plazo. Nos motiva buscar estrategias innovadoras que agilicen la coordinación entre proveedores y destinatarios, y así contribuir a la competitividad de quienes operan en un entorno industrial complejo y cambiante.

        <div className='padding-vertical-1'></div>

        El futuro de Transportes Fernández se construye sobre la base de nuestros valores: dedicación, responsabilidad y rigor. Seguiremos invirtiendo en tecnología, capacitación y renovación de la flota para mantener nuestro liderazgo en el sector. Al mismo tiempo, reforzamos nuestro compromiso de ir de la mano de las empresas que depositan su confianza en nosotros, impulsándolas a avanzar con la certeza de que cuentan con un aliado firme y experimentado.
      </TextBox>

      <div className="enLinea negrita">
        <Button to={getPathByLabel('servicios')} className={"button button-Empresa-Servicios negrita"}>
          SERVICIOS
        </Button>

        <div className="padding-vertical-1"></div>

        <Button to={getPathByLabel('contacto')} className={"button button-Empresa-Contacto"}>
          CONTACTO
        </Button>
      </div>

      <div className="padding-vertical-3"></div>

      <MediaPicture
        src={kamioneh}
        alt="Descripción de la imagen"
        className="picture-container picture-Empresa-End"
      />

    </div>
  );
}

export default Empresa;
