import React from 'react';
import { Link } from "react-router-dom";

// Componentes
import Carousel from '../../components/features/Carousel/Carousel';
import EmployeeCard from '../../components/features/Employee/EmployeeCard';
import CEOCard from '../../components/features/Employee/CEOCard';
import Background from '../../components/features/Background/Background';
import TextBox from '../../components/layout/Box/TextBox';
import MediaPicture from '../../components/features/MediaPicture/MediaPicture';
import FlipCard from '../../components/features/FlipCard/FlipCard';
import Button from '../../components/features/Button/Button';
import MailButton from '../../components/features/MailButton/MailButton';
import Maps from '../../components/features/Maps/Maps';

// Rutas
import employees from '../../data/employees';

// Imágenes
import truckImage from '../../assets/TransportersBranding/SOCIAL MEDIA POST/1-02.jpg';
import narutoImage from '../../assets/images/naruto.jpg';
import laMadre from '../../assets/TransportersBranding/SEXIO/Editadas/laMadre.jpg';
import españa from '../../assets/original_images/españakbron.png';
import españa2 from '../../assets/original_images/españakbron22.png';
import madreNiño from '../../assets/TransportersBranding/SEXIO/100/madreNiño2.jpg';

// Imágenes endpoints
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
import iconoIndustrial from '../../assets/TransportersBranding/icongraphy/1/icons-75.jpg';
import iconoEolico from '../../assets/TransportersBranding/icongraphy/1/icons-76.png';
import iconoEspecial from '../../assets/TransportersBranding/icongraphy/1/icons-77.png';

// Rutas
import { getPathByLabel } from '../../data/routes';

function Inicio() {
  return (
    <div id='Inicio'>

      {/* CARRUSEL */}
      <Carousel />

      {/* INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION INTRODUCCION*/}
      <div id='Intro' className="alinearEnColumna">
        <h1 className='large-text-title padding-vertical-3 text-box-Home-IntroTitle'>
          <b>BIENVENIDO A TRANSPORTES FERNÁNDEZ</b>
        </h1>

        <div className="enLinea">
        </div>
      </div>

      <div className="alinearEnColumna">

        <div className="enLinea">
          <div className="izquierda">
            <MediaPicture
              src={madreNiño}
              alt="Descripción de la imagen"
              className="picture-container picture-Home-Intro"
            />

          </div>
          <div className='derecha'>
            <TextBox className='text-box text-box-Home-Intro text-body'>

              En                 {" "}
              <Link to={getPathByLabel('empresa')} className="text-red no-underline">
                <strong>Transportes Fernández</strong>
              </Link>
              {" "} trabajamos para ofrecer un servicio de calidad a nuestros clientes. Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha permitido consolidar nuestra posición como líderes en el sector del transporte industrial.

              <div className='padding-vertical-1'></div>

              Con
              {" "}
              <Link to={getPathByLabel('aniversario')} className="text-red no-underline">
                <strong>70 años</strong>
              </Link>
              {" "}
              de experiencia, seguimos innovando y mejorando para superar las expectativas de nuestros clientes y adaptarnos a las necesidades del mercado.

            </TextBox>
          </div>
        </div>
      </div>


      <h1 className='padding-vertical-3'></h1>

      {/* 5 RAZONES POR LAS QUE ELEGIRNOS 5 RAZONES POR LAS QUE ELEGIRNOS5 RAZONES POR LAS QUE ELEGIRNOS5 RAZONES POR LAS QUE ELEGIRNOS5 RAZONES POR LAS QUE ELEGIRNOS */}

      <Background color="#1a2a36">
        <div className="padding-vertical-2"></div>
        <h1 className='large-text-title text-white alinearEnColumna'>
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
        <div className="padding-vertical-2"></div>
      </Background>


      {/* SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS*/}
      <div id='Home-Servicios' className="alinearEnColumna">

        <div className='large-text-title padding-vertical-3'>

          <Link to={getPathByLabel('servicios')} className="text-red no-underline">
            <strong><b>SERVICIOS</b></strong>
          </Link>
        </div>

        <h1 className='text-red text-title padding-vertical-2'>LO QUE TRANSPORTAMOS</h1>

        <div className="enLinea text-body">
          <FlipCard
            frontImage={equipamientoIndustrial}
            backText={"Equipamiento industrial"}
            icon={
              <Link to={getPathByLabel("industrial")}>
                <img src={iconoIndustrial} alt='iconIndustrial' />
              </Link>}
          />
          <FlipCard
            frontImage={parquesEolicos}
            backText="Parques eólicos"
            icon={
              <Link to={getPathByLabel("parques")}>
                <img src={iconoEolico} alt='iconEolico' />
              </Link>}
          />
          <FlipCard
            frontImage={medidasEspeciales}
            backText="Medidas especiales"
            icon={
              <Link to={getPathByLabel("especiales")}>
                <img src={iconoEspecial} alt='iconEspecial' />
              </Link>}
          />
        </div>
      </div>

      <TextBox className='text-box text-box-Home-Servicios padding-vertical-up-3 text-body'>
        Nos especializamos en el traslado de maquinaria industrial de gran volumen, componentes para parques eólicos y cargas de dimensiones especiales, ofreciendo soluciones diseñadas para los proyectos más exigentes. Nuestro equipo de expertos analiza minuciosamente cada tipo de carga para seleccionar el vehículo y la metodología de transporte más adecuada, priorizando siempre la seguridad y eficiencia. Gracias a esta capacidad de adaptación, podemos abarcar desde piezas delicadas de precisión hasta estructuras sobredimensionadas que requieren un cuidado excepcional en cada fase del proceso.

        <div className='padding-vertical-1'></div>

        Para responder a las demandas más específicas, contamos con una flota de vehículos modernos y equipados con tecnología de vanguardia, capaz de gestionar incluso los desafíos logísticos más complejos. Cada operación se ejecuta con estándares rigurosos de calidad, respaldados por profesionales altamente cualificados que supervisan de cerca el proceso de carga, traslado y entrega. Este compromiso integral garantiza la integridad de los bienes en todo momento, convirtiendo a Transportes Fernández en un aliado confiable para el transporte especializado.
      </TextBox>

      <h1 className='padding-vertical-4 text-red text-title alinearEnColumna'>DONDE LO TRANSPORTAMOS</h1>

      <div className="enLinea text-body">
        <FlipCard
          frontImage={laMancha}
          backText={"Transporte regional en La Mancha"}
          icon={
            <Link to={getPathByLabel("regional")}>
              <img src={iconoLaMancha} alt='iconLaMancha' />
            </Link>}
        />
        <FlipCard
          frontImage={valencia}
          backText="Transporte por toda la península e islas"
          icon={
            <Link to={getPathByLabel("nacional")}>
              <img src={iconoValencia} alt='iconValencia' />
            </Link>}
        />
        <FlipCard
          frontImage={internacional}
          backText="Transporte a nivel internacional"
          icon={
            <Link to={getPathByLabel("internacional")}>
              <img src={iconoInternacional} alt='iconInternacional' />
            </Link>}
        />
      </div>
      <TextBox className='text-box text-box-Home-Servicios padding-vertical-up-3 text-body'>
        Nuestra cobertura geográfica abarca tanto rutas nacionales como internacionales, facilitando la circulación de cargas en diversos entornos urbanos, industriales y rurales. Gracias a la experiencia acumulada en numerosos proyectos, conocemos a fondo las vías y regulaciones que rigen el transporte de mercancías en distintas regiones, asegurando el cumplimiento de todas las normativas y el uso eficiente de cada ruta. Con una planificación detallada y el respaldo de sistemas de localización en tiempo real, garantizamos la llegada puntual de cada envío.
      </TextBox>



      <TextBox className='text-box text-box-Home-Servicios text-body'>
        Además, asumimos retos logísticos en zonas de difícil acceso o con condiciones geográficas particulares, adaptando los recorridos para optimizar tiempos y recursos. Nuestros expertos llevan a cabo un estudio previo de cada trayecto, identificando posibles obstáculos y diseñando planes de contingencia para cualquier eventualidad. De esta forma, ofrecemos a nuestros clientes la tranquilidad de contar con un servicio de alcance extendido, capaz de transportar sus mercancías allá donde se necesiten, con la misma calidad y eficacia que nos caracteriza.
      </TextBox>

      <div className='padding-vertical-up-3'></div>

      <div className='alinearEnColumna'>
        <Button to={getPathByLabel('servicios')} className={"button button-Empresa-Servicios negrita"}>
          SERVICIOS
        </Button>
      </div>

      <div className='padding-vertical-up-3'></div>

      {/* EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO EQUIPO*/}

      <Background color="#ab273c">
        <div className='large-text-title text-white alinearEnColumna padding-vertical-down-3'>
          <div className="padding-vertical-2"></div>

          <Link to={getPathByLabel('equipo')} className="text-white no-underline">
            <strong><b>CONOCE AL EQUIPO</b></strong>
          </Link>
        </div>

        <div className="text-red text-body alinearEnColumna">
          <CEOCard
            name="Paz Fernández Lozano"
            position="CEO"
            imageUrl={laMadre}
            number="+34 605 688 210"
            mail="paz@transportesfernandez.es"
            hoverable={true}
          />
        </div>



        <TextBox className="text-box text-body text-white text-box-Home-Equipo padding-vertical-up-3">
          Nuestro equipo está formado por profesionales altamente capacitados, comprometidos con la excelencia y la satisfacción de nuestros clientes. Cada miembro aporta una combinación única de experiencia, creatividad y pasión por lo que hace, lo que nos permite ofrecer soluciones personalizadas y de alta calidad.
        </TextBox>

        {/* EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS EMPLEADOS*/}

        <div className="padding-vertical-1"></div>

        <div className="employees-container text-body">
          {employees.map((employee, index) => (
            <EmployeeCard
              key={employee.id}
              name={employee.name}
              position={employee.position}
              imageUrl={employee.imageUrl}
              number={employee.number}
              mail={employee.mail}
              className={`employee-card ${index % 2 === 0 ? 'highlight' : ''}`}
              hoverable={true}
            />
          ))}
        </div>

        <div>
        </div>
        <div className="padding-vertical-0"></div>

        <TextBox className="text-box text-body text-white text-box-Home-Equipo padding-vertical-up-3">
          Valoramos el trabajo en equipo, la innovación y la comunicación abierta, asegurándonos de que cada proyecto sea gestionado con el máximo cuidado y dedicación. <b>Juntos</b>, trabajamos para superar las expectativas de nuestros clientes y consolidar nuestra posición como líderes en el sector del transporte industrial.
        </TextBox>

        <div className="padding-vertical-1"></div>

      </Background>


      <Background
        color="#1a2a36" // Hexadecimal color
        transparency={0.9} // Transparency instead of opacity
        imageUrl={españa2} // España map as background
      >
        <div className="alinearEnColumna">
          <div className="padding-vertical-up-3"></div>
          <h1 className="text-white large-text-title">{" "}
            <Link to={getPathByLabel('contacto')} className="text-white no-underline">
              <strong>CONTÁCTANOS PARA CUALQUIER CONSULTA</strong>
            </Link>
            {" "} </h1>

          <div className="padding-vertical-2"></div>
        </div>

        <TextBox className="text-box text-box-Home-Horarios text-body alinearEnColumna negrita">
          HORARIO DE OFICINA:
          <br />
          LUNES A VIERNES DE 9:00 A 14:00 Y DE 16:30 A 19:30

          <div className="padding-vertical-1"></div>

          CORREO:
          <br />
          contacto@transportesfernandez.es
        </TextBox>

        <div className="padding-vertical-1"></div>

        <div className="enLinea negrita">
          <Button to={getPathByLabel('contacto')} className={"button button-Home-Contacto"}>
            CONTACTO
          </Button>

          <div className="padding-vertical-1"></div>

          <MailButton
            email="contacto@transportesfernandez.es"
            subject="Consulta desde la web"
            body="Hola, tengo algunas dudas sobre..."
            className="mail-button"
          >
            ESCRÍBENOS
          </MailButton>

        </div>

        <div className="padding-vertical-3"></div>

      </Background>

      <div className="padding-vertical-2"></div>

      <h1 className="text-red large-text-title"> PUEDES ENCONTRARNOS EN VILLARROBLEDO (ALBACETE)</h1>
      <TextBox className='text-box text-box-Home-Servicios padding-vertical-3 text-body'>
        La sede principal de Transportes Fernández está ubicada en <b className="text-red">Villarrobledo (Albacete)</b>, desde donde se gestionan servicios de transporte regional en La Mancha, así como transporte nacional e internacional. Gracias a una amplia red de colaboradores y socios, la empresa ofrece soluciones de transporte personalizadas que pueden adaptarse a cualquier necesidad, abarcando desde rutas locales hasta operaciones logísticas en cualquier parte del mundo.
      </TextBox>

      <Maps />

    </div >
  );
}

export default Inicio;


{/* <h1 className="text-white large-text-title">Oficina de Villarrobledo - 967 14 06 98</h1>
<div className="padding-vertical-2"></div> */}