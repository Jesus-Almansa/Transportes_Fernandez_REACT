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
import truckImage from '../../assets/Transporters Branding/SOCIAL MEDIA POST/1-02.jpg';
import narutoImage from '../../assets/images/naruto.jpg';
import laMadre from '../../assets/Transporters Branding/SEXIO/Editadas/laMadre.jpg';
import valencia from '../../assets/original_images/valencia.jpg';
import laMancha from '../../assets/original_images/laMancha.jpg';
import infiniteCubeImage from '../../assets/images/infinitecube.png';
import equipamientoIndustrial from '../../assets/original_images/equipamienoIndustrial2.png'
import parquesEolicos from '../../assets/original_images/parquesEolicos0.png';
import medidasEspeciales from '../../assets/original_images/medidasEspeciales.png';
import internacional from '../../assets/original_images/space.png';


// Iconos
import IconoServicios from '../../assets/Transporters Branding/icongraphy/1/Icons-28.png';
import iconoLaMancha from '../../assets/Transporters Branding/icongraphy/1/Icons-72.png';
import iconoValencia from '../../assets/Transporters Branding/icongraphy/1/Icons-73.png';
import iconoInternacional from '../../assets/Transporters Branding/icongraphy/1/Icons-74.png';
import iconoIndustrial from '../../assets/Transporters Branding/icongraphy/1/Icons-75.jpg';
import iconoEolico from '../../assets/Transporters Branding/icongraphy/1/Icons-76.png';
import iconoEspecial from '../../assets/Transporters Branding/icongraphy/1/Icons-77.png';

// Rutas
import { getPathByLabel } from '../../data/routes';

function Home() {
  return (
    <div id='Home'>

      {/* CARRUSEL */}
      <Carousel />

      {/* INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION*/}
      <div id='Intro' className="alinearEnColumna">
        <h1 className='text-red very-large-text-title padding-vertical-3'>
          <b>BIENVENIDO A TRANSPORTES FERNÁNDEZ</b>
        </h1>

        <div className="enLinea">
          <TextBox className="text-box text-box-Home-Resumen">
          </TextBox>
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
              <TextBox className='text-box text-box-Home-Intro'>
                <h1 className='large-text-title text-white'>Entregando calidad</h1>
                <p>
                  En Transportes Fernández trabajamos para ofrecer un servicio de calidad a nuestros clientes. Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha permitido consolidar nuestra posición como líderes en el sector del transporte industrial.

                  <div className='padding-vertical-1'></div>

                  Con{" "}
                  <Link to={getPathByLabel('aniversario')} className="text-red">
                    <strong>70 años</strong>
                  </Link>{' '}
                  de experiencia, seguimos innovando y mejorando para superar las expectativas de nuestros clientes y adaptarnos a las necesidades del mercado.
                </p>
              </TextBox>
            </div>
          </div>
        </div>

        <h1 className='padding-vertical-3'></h1>

        {/* 5 RAZONES POR LAS QUE ELEGIRNOS 5 RAZONES POR LAS QUE ELEGIRNOS5 RAZONES POR LAS QUE ELEGIRNOS5 RAZONES POR LAS QUE ELEGIRNOS5 RAZONES POR LAS QUE ELEGIRNOS */}

        <Background color="#1a2a36">


          <TextBox className="text-box text-box-Home-Razones">
            <div className='large-text-title text-white'>
              <b>5 Razones para elegirnos</b>
            </div>
            <br />
            <div className='large-text-body text-white'>

              <ul className="reasons-list text-white" style={{ listStyle: 'none', padding: 0 }}>
                <li>&#10004; Profesionales altamente capacitados y comprometidos con la excelencia.</li>
                <li>&#10004; Soluciones personalizadas que se adaptan a las necesidades de cada cliente.</li>
                <li>&#10004; Innovación constante para mejorar la calidad de nuestros servicios.</li>
                <li>&#10004; Comunicación abierta y trabajo en equipo en cada proyecto.</li>
                <li>&#10004; Compromiso con la satisfacción total y el éxito de nuestros clientes.</li>
              </ul>
            </div>
          </TextBox>
          <div>
          </div>
        </Background>


        {/* SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS*/}
        <div id='Servicios' className="alinearEnColumna">

          <h1 className='very-large-text-title text-red padding-vertical-3'>SERVICIOS</h1>

          <h1 className='text-red large-text-title'>Lo que transportamos</h1>

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
        <TextBox className='text-box text-box-Home-Servicios'>
          <p>
            En Transportes Fernández trabajamos para ofrecer un servicio de calidad a nuestros clientes. Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha permitido consolidar nuestra posición como líderes en el sector del transporte industrial. Con 70 años de experiencia, seguimos innovando y mejorando para superar las expectativas de nuestros clientes y adaptarnos a las necesidades del mercado.
          </p>
        </TextBox>

      </div>

      <div className='padding-vertical-3'></div>

      {/* EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO*/}
      <Background color="#ab273c">
        <div className="enLinea">

          <div className="derecha text-red">
            <EmployeeCard
              className='ceo-card ceo-card-Home-left'
              name="Paz Fernández Lozano"
              position="CEO"
              imageUrl={laMadre}
            />
          </div>

          <div className="izquierda">

            <TextBox className="text-box text-box-Home-Equipo">
              <div className='large-text-title justify-left text-white'>
                <b>Conoce al Equipo</b>
              </div>
              <br />
              <div className='large-text-body text-white'>
                Nuestro equipo está formado por profesionales altamente capacitados, comprometidos con la excelencia y la satisfacción de nuestros clientes. Cada miembro aporta una combinación única de experiencia, creatividad y pasión por lo que hace, lo que nos permite ofrecer soluciones personalizadas y de alta calidad.
                <br />
                <br />
                Valoramos el trabajo en equipo, la innovación y la comunicación abierta, asegurándonos de que cada proyecto sea gestionado con el máximo cuidado y dedicación. Juntos, trabajamos para superar las expectativas de nuestros clientes y consolidar nuestra posición como líderes en el sector del transporte industrial.
              </div>
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