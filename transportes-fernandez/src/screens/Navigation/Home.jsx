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
import regionalImage from '../../assets/images/regional.png';
import nacionalImage from '../../assets/images/nacional.jpg';
import infiniteCubeImage from '../../assets/images/infinitecube.png';

// Iconos
import IconoServicios from '../../assets/Transporters Branding/icongraphy/1/Icons-28.png';

// Rutas
import { getPathByLabel } from '../../data/routes';

function Home() {
  return (
    <div id='Home'>
      <Carousel />
      <br />

      <div id='Resumen' className="alinearEnColumna">
        <h1 className='text-red large-text-title'>
          BIENVENIDO A TRANSPORTES FERNÁNDEZ
        </h1>
        <div className="enLinea">
          <TextBox className="text-box text-box-Home-Resumen">
          </TextBox>
        </div>
      </div>

      <div id='Empresa' className="alinearEnColumna">

        <div id='Intro' className='alinearEnColumna'>
          {/* <h1>Cumplimos 70 años</h1> */}

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
                  En Transportes Fernández trabajamos para ofrecer un servicio de calidad a nuestros clientes. Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha permitido consolidar nuestra posición como líderes en el sector del transporte industrial. Con{" "}
                  <Link to={getPathByLabel('Aniversario')} className="text-red">
                    70 años
                  </Link>{' '}
                  de experiencia, seguimos innovando y mejorando para superar las expectativas de nuestros clientes y adaptarnos a las necesidades del mercado.
                </p>
              </TextBox>
            </div>
          </div>
        </div>


        <div id='Servicios' className="alinearEnColumna">

          <h1 className='large-text-title text-red'>Servicios</h1>

          <TextBox className='text-box text-box-Home-Servicios'>
            <p>
              En Transportes Fernández trabajamos para ofrecer un servicio de calidad a nuestros clientes. Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha permitido consolidar nuestra posición como líderes en el sector del transporte industrial. Con 70 años de experiencia, seguimos innovando y mejorando para superar las expectativas de nuestros clientes y adaptarnos a las necesidades del mercado.
            </p>
          </TextBox>

          <div className="enLinea">
            <FlipCard
              frontImage={regionalImage}
              backText="Transportes Fernández es una empresa familiar con más de 40 años de actividad. Estamos especializados en transporte regional, cubriendo la zona de La Mancha."
              icon={<i className="fas fa-truck" />}
            />
            <FlipCard
              frontImage={regionalImage}
              backText="Transportes Fernández es una empresa familiar con más de 40 años de actividad. Estamos especializados en transporte regional, cubriendo la zona de La Mancha."
            />
            <FlipCard
              frontImage={regionalImage}
              backText="Transportes Fernández es una empresa familiar con más de 40 años de actividad. Estamos especializados en transporte regional, cubriendo la zona de La Mancha."
            />
            <FlipCard
              frontImage={infiniteCubeImage}
              backText="Cubo chill de cojones"
              icon={<img src={IconoServicios} alt='Icon' />}
            />
          </div>
        </div>
      </div>


      <Background color="#ab273c">
        <div className="enLinea">

          <div className="derecha text-red">
            <EmployeeCard
              className='ceo-card ceo-card-Home-left'
              name="Paz Fernández Lozano"
              position="CEO"
              imageUrl={narutoImage}
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