import React from 'react';
import { Link } from "react-router-dom";

// Componentes
import Carousel from '../../components/features/Carousel/Carousel';
import EmployeeCard from '../../components/features/Employee/EmployeeCard';
import Background from '../../components/features/Background/Background';
import ContactForm from '../../components/features/ContactForm/ContactForm';
import TextBox from '../../components/layout/Box/TextBox';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import FlipCard from '../../components/features/FlipCard/FlipCard';

// Rutas
import employees from '../../data/employees';

// Imágenes
import truckImage from '../../assets/TransportersBranding/SOCIAL MEDIA POST/1-02.jpg';
import narutoImage from '../../assets/images/naruto.jpg';
import laMadre from '../../assets/TransportersBranding/SEXIO/Editadas/laMadre.jpg';
import valencia from '../../assets/original_images/valencia.jpg';
import laMancha from '../../assets/original_images/laMancha.jpg';
import infiniteCubeImage from '../../assets/images/infinitecube.png';
import equipamientoIndustrial from '../../assets/original_images/equipamienoIndustrial2.png'
import parquesEolicos from '../../assets/original_images/parquesEolicos0.png';
import medidasEspeciales from '../../assets/original_images/medidasEspeciales.png';
import internacional from '../../assets/original_images/space.png';


// Iconos
import IconoServicios from '../../assets/TransportersBranding/icongraphy/1/Icons-28.png';
import iconoLaMancha from '../../assets/TransportersBranding/icongraphy/1/icons-72.png';
import iconoValencia from '../../assets/TransportersBranding/icongraphy/1/icons-73.png';
import iconoInternacional from '../../assets/TransportersBranding/icongraphy/1/icons-74.png';
import iconoIndustrial from '../../assets/TransportersBranding/icongraphy/1/icons-75.png';
import iconoEolico from '../../assets/TransportersBranding/icongraphy/1/icons-76.png';
import iconoEspecial from '../../assets/TransportersBranding/icongraphy/1/icons-77.png';

// Rutas
import { getPathByLabel } from '../../data/routes';

function Home() {
  return (
    <div id='Home'>

      {/* CARRUSEL */}
      <Carousel />

      {/* INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION*/}
      <div id='Intro' className="alinearEnColumna">
        <h1 className='very-large-text-title padding-vertical-3 text-box-Home-IntroTitle'>
          <b>BIENVENIDO A TRANSPORTES FERNÁNDEZ</b>
        </h1>

        <div className="enLinea">
        </div>
      </div>

      <div className="alinearEnColumna">

        <div className='alinearEnColumna'>

          <div className="enLinea">
            <div className="izquierda">
              <MediaPicture
                src={truckImage}
                alt="Descripción de la imagen"
                className="picture-container picture-Home-Intro"
              />

            </div>
            <div className='derecha'>
              <TextBox className='text-box text-box-Home-Intro text-body'>

                En Transportes Fernández trabajamos para ofrecer un servicio de calidad a nuestros clientes. Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha permitido consolidar nuestra posición como líderes en el sector del transporte industrial.

                <div className='padding-vertical-1'></div>

                Con{" "}
                <Link to={getPathByLabel('aniversario')} className="text-red">
                  <strong>70 años</strong>
                </Link>{' '}
                de experiencia, seguimos innovando y mejorando para superar las expectativas de nuestros clientes y adaptarnos a las necesidades del mercado.

              </TextBox>
            </div>
          </div>
        </div>

        <h1 className='padding-vertical-3'></h1>

        {/* 5 RAZONES POR LAS QUE ELEGIRNOS 5 RAZONES POR LAS QUE ELEGIRNOS5 RAZONES POR LAS QUE ELEGIRNOS5 RAZONES POR LAS QUE ELEGIRNOS5 RAZONES POR LAS QUE ELEGIRNOS */}

        <Background color="#1a2a36">

          <h1 className='very-large-text-title text-white alinearEnColumna padding-vertical-3'>
            5 Razones para elegirnos
          </h1>
          <TextBox className="text-box text-box-Home-Razones">

            <br />
            <div className='text-body text-white'>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>&#10004; Profesionales altamente capacitados y comprometidos con la excelencia.</li>
                <li>&#10004; Soluciones personalizadas que se adaptan a las necesidades de cada cliente.</li>
                <li>&#10004; Respuesta inmediata y apoyo en todo momento, garantizando su tranquilidad.</li>
                <li>&#10004; Comunicación abierta y trabajo en equipo en cada proyecto.</li>
                <li>&#10004; Compromiso con la satisfacción y el éxito de nuestros clientes.</li>
              </ul>
            </div>
          </TextBox>
          <div>
          </div>
        </Background>


        {/* SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS*/}
        <div id='Servicios' className="alinearEnColumna">

          <h1 className='very-large-text-title text-red padding-vertical-3'>SERVICIOS</h1>

          <h1 className='text-red large-text-title padding-vertical-2'>Lo que transportamos</h1>

          <div className="enLinea">
            <FlipCard
              frontImage={equipamientoIndustrial}
              backText={"Equipamiento industrial"}
              icon={
                <Link to={getPathByLabel("servicios")}>
                  <img src={iconoIndustrial} alt='iconIndustrial' />
                </Link>}
            />
            <FlipCard
              frontImage={parquesEolicos}
              backText="Parques eólicos"
              icon={
                <Link to={getPathByLabel("servicios")}>
                  <img src={iconoEolico} alt='iconEolico' />
                </Link>}
            />
            <FlipCard
              frontImage={medidasEspeciales}
              backText="Medidas especiales"
              icon={
                <Link to={getPathByLabel("servicios")}>
                  <img src={iconoEspecial} alt='iconEspecial' />
                </Link>}
            />
          </div>
        </div>

        <TextBox className='text-box text-box-Home-Servicios padding-vertical-3 text-body'>
          Transportes Fernández se especializa en tres áreas clave del transporte: maquinaria industrial, componentes para parques eólicos y cargas de dimensiones especiales. Cada operación es realizada por un equipo de expertos altamente cualificados que aseguran un servicio eficiente y seguro, cumpliendo con los más altos estándares del sector. La empresa cuenta con una flota de vehículos modernos y adaptados para gestionar transportes de alta complejidad, garantizando la integridad de las cargas en todo momento.

          <div className='padding-vertical-1'></div>

          Además, Transportes Fernández ofrece un enfoque completamente personalizado para cada cliente, analizando en detalle las necesidades de cada proyecto para diseñar soluciones a medida. Este compromiso con la calidad y la atención al cliente ha posicionado a la empresa como un referente en el sector del transporte especializado. Desde el diseño de rutas optimizadas hasta el uso de tecnologías avanzadas para supervisar cada operación, Transportes Fernández asegura un servicio que combina innovación, fiabilidad y profesionalismo.
        </TextBox>

        <h1 className='padding-vertical-1 text-red'>Donde lo transportamos</h1>

        <div className="enLinea">

          <FlipCard
            frontImage={laMancha}
            backText={"Transporte regional en La Mancha"}
            icon={
              <Link to={getPathByLabel("servicios")}>
                <img src={iconoLaMancha} alt='iconLaMancha' />
              </Link>}
          />
          <FlipCard
            frontImage={valencia}
            backText="Transporte por toda península e islas"
            icon={
              <Link to={getPathByLabel("Aniversario")}>
                <img src={iconoValencia} alt='iconValencia' />
              </Link>}
          />
          <FlipCard
            frontImage={internacional}
            backText="Transporte a nivel internacional"
            icon={
              <Link to={getPathByLabel("Aniversario")}>
                <img src={iconoInternacional} alt='iconInternacional' />
              </Link>}
          />
        </div>
        <TextBox className='text-box text-box-Home-Servicios padding-vertical-3 text-body'>
          Transportes Fernández se especializa en tres áreas clave del transporte: maquinaria industrial, componentes para parques eólicos y cargas de dimensiones especiales. Cada operación es realizada por un equipo de expertos altamente cualificados que aseguran un servicio eficiente y seguro, cumpliendo con los más altos estándares del sector. La empresa cuenta con una flota de vehículos modernos y adaptados para gestionar transportes de alta complejidad, garantizando la integridad de las cargas en todo momento.

          <div className='padding-vertical-1'></div>

          La sede principal de Transportes Fernández está ubicada en <b className="text-red">Villarrobledo (Albacete)</b>, desde donde se gestionan servicios de transporte regional en La Mancha, así como transporte nacional e internacional. Gracias a una amplia red de colaboradores y socios, la empresa ofrece soluciones de transporte personalizadas que pueden adaptarse a cualquier necesidad, abarcando desde rutas locales hasta operaciones logísticas en cualquier parte del mundo. Este enfoque global permite a Transportes Fernández consolidarse como un referente en el sector, combinando innovación, profesionalismo y alcance internacional.
        </TextBox>

      </div>

      <div className='padding-vertical-3'></div>

      {/* EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO*/}
      <Background color="#ab273c">
        <div className='large-text-title text-white alinearEnColumna padding-vertical-down-3'>
          <b>CONOCE AL EQUIPO</b>
        </div>
        <div className="enLinea">

          <div className="izquierda text-red negrita">
            <EmployeeCard
              className='ceo-card ceo-card-Home-left'
              name="Paz Fernández Lozano"
              position="CEO"
              imageUrl={laMadre}
            />
          </div>

          <div className="derecha">
            <TextBox className="text-body text-white text-box-Home-Equipo padding-vertical-up-3">
              Nuestro equipo está formado por profesionales altamente capacitados, comprometidos con la excelencia y la satisfacción de nuestros clientes. Cada miembro aporta una combinación única de experiencia, creatividad y pasión por lo que hace, lo que nos permite ofrecer soluciones personalizadas y de alta calidad.
              <div className='padding-vertical-1'></div>
              Valoramos el trabajo en equipo, la innovación y la comunicación abierta, asegurándonos de que cada proyecto sea gestionado con el máximo cuidado y dedicación. Juntos, trabajamos para superar las expectativas de nuestros clientes y consolidar nuestra posición como líderes en el sector del transporte industrial.
            </TextBox>
          </div>
        </div>

        {/* EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS*/}

        <br />

        <div className="employees-container text-red">
          {employees.map((employee, index) => (
            <EmployeeCard
              key={employee.id}
              name={employee.name}
              position={employee.position}
              imageUrl={employee.imageUrl}
              className={`employee-card ${index % 2 === 0 ? 'highlight' : ''}`} // Ejemplo con clase condicional
            />
          ))}
        </div>

        <div>
        </div>
      </Background>


      <div className="enLinea">
        <h1>¿Tienes alguna duda? Ponte en contacto con nosotros</h1>
      </div>
      <ContactForm />
    </div>
  );
}

export default Home;