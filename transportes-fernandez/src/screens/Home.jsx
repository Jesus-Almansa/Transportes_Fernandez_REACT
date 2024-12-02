import React from 'react';
// Componentes
import Carousel from '../components/features/Carousel/Carousel';
import BoxList from '../components/layout/Box/BoxList';
import EmployeeCard from '../components/features/Employee/EmployeeCard';
import Background from '../components/features/Background/Background';
import ContactForm from '../components/features/ContactForm/ContactForm';
import TextBox from '../components/layout/Box/TextBox';
import MediaPicture from '../components/features/MediaPicture/MediaPicture';

// Rutas
import employees from '../data/employees';

// Imágenes
import truckImage from '../assets/images/truck_black.png';
import narutoImage from '../assets/images/naruto.jpg';
import regionalImage from '../assets/images/regional.png';
import nacionalImage from '../assets/images/nacional.jpg';
import aniversarioImage from '../assets/images/Logo-70Aniversario.png';

function Home() {
  return (
    <div id='Home'>
      <Carousel />
      <br />

      <div id='Resumen' className="alinearEnColumna">
        <h1 className='text-red'>
          BIENVENIDO A TRANSPORTES FERNÁNDEZ
        </h1>
        <div className="enLinea">
          <TextBox className="text-box text-box-Home-Resumen">

          </TextBox>
        </div>
      </div>




      <br />
      <div id='Aniversario' className='alinearEnColumna'>
        {/* <h1>Cumplimos 70 años</h1> */}

        <div className="enLinea">
          <div className="izquierda">
            <MediaPicture
              src={aniversarioImage}
              alt="Descripción de la imagen"
              className="picture-container picture-Home-aniversario"
            />

          </div>
          <div className='derecha'>
            <TextBox className='text-box text-box-Home-Aniversario'>
              <h1 className=''>Cumplimos 70 años</h1>
              Transportes Fernández es una empresa familiar con más de 40 años de actividad. Estamos especializados en transporte regional, cubriendo la zona de La Mancha.
              HAY QUE PONER JUSTIFICADO A LA IZQUIERDA EL h1
            </TextBox>
          </div>
        </div>
      </div>

      <div id='Servicios' className="alinearEnColumna">
        <h1>Servicios</h1>
        <div className="enLinea">
          <TextBox className="text-box text-box-Home-Resumen">
            Somos una empresa especializada en el transporte de material industrial, con décadas de experiencia ofreciendo soluciones logísticas de alta calidad para grandes empresas del sector. Nos enfocamos exclusivamente en el transporte de maquinaria y materiales industriales, dejando de lado el transporte de paquetes pequeños, lo que nos permite garantizar un servicio altamente especializado, diseñado para cumplir con las necesidades específicas de nuestros clientes.

            Trabajamos para construir una comunidad de personas comprometidas y profesionales, que valoran la excelencia y el crecimiento continuo, tanto a nivel personal como en su trabajo. Aspiramos a superar retos con dedicación, responsabilidad y calidad, siempre garantizando confianza, seguridad y satisfacción en cada servicio que ofrecemos.

            Nuestro objetivo es posicionarnos como un proveedor premium, conocido por nuestra eficiencia, profesionalismo y resultados de calidad. Nos esforzamos por ofrecer un servicio serio, confiable y adaptado a los más altos estándares del sector. Bajo nuestro lema, "Lo primero es el cliente", reafirmamos nuestro compromiso de superar expectativas y construir relaciones sólidas basadas en la confianza y la satisfacción de quienes eligen trabajar con nosotros.
          </TextBox>
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
              <div className='large-text-title justify-left '>
                <b>Conoce al Equipo</b>
              </div>
              <br />
              <div className='large-text-body'>
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