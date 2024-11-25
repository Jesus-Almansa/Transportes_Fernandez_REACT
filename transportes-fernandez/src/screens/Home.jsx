import React from 'react';
// Componentes
import Carousel from '../components/features/Carousel/Carousel';
import BoxList from '../components/layout/Box/BoxList';
import InfoCard from '../components/layout/Box/InfoCard';
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

function Home() {
  return (
    <div>
      <Carousel />

      <div id='Resumen' className="alinearEnColumna">
        <h1>Bienvenido</h1>
        <div className="enLinea">
          <TextBox className="text-box-Home-Resumen">
            Somos una empresa especializada en el transporte de material industrial, con décadas de experiencia ofreciendo soluciones logísticas de alta calidad para grandes empresas del sector. Nos enfocamos exclusivamente en el transporte de maquinaria y materiales industriales, dejando de lado el transporte de paquetes pequeños, lo que nos permite garantizar un servicio altamente especializado, diseñado para cumplir con las necesidades específicas de nuestros clientes.

            Trabajamos para construir una comunidad de personas comprometidas y profesionales, que valoran la excelencia y el crecimiento continuo, tanto a nivel personal como en su trabajo. Aspiramos a superar retos con dedicación, responsabilidad y calidad, siempre garantizando confianza, seguridad y satisfacción en cada servicio que ofrecemos.

            Nuestro objetivo es posicionarnos como un proveedor premium, conocido por nuestra eficiencia, profesionalismo y resultados de calidad. Nos esforzamos por ofrecer un servicio serio, confiable y adaptado a los más altos estándares del sector. Bajo nuestro lema, "Lo primero es el cliente", reafirmamos nuestro compromiso de superar expectativas y construir relaciones sólidas basadas en la confianza y la satisfacción de quienes eligen trabajar con nosotros.
          </TextBox>
        </div>
      </div>

      <div id='Servicios' className="alinearEnColumna">
        <h1>Servicios</h1>
        <div className="enLinea">
          <TextBox className="text-box-Home-Resumen">
            Somos una empresa especializada en el transporte de material industrial, con décadas de experiencia ofreciendo soluciones logísticas de alta calidad para grandes empresas del sector. Nos enfocamos exclusivamente en el transporte de maquinaria y materiales industriales, dejando de lado el transporte de paquetes pequeños, lo que nos permite garantizar un servicio altamente especializado, diseñado para cumplir con las necesidades específicas de nuestros clientes.

            Trabajamos para construir una comunidad de personas comprometidas y profesionales, que valoran la excelencia y el crecimiento continuo, tanto a nivel personal como en su trabajo. Aspiramos a superar retos con dedicación, responsabilidad y calidad, siempre garantizando confianza, seguridad y satisfacción en cada servicio que ofrecemos.

            Nuestro objetivo es posicionarnos como un proveedor premium, conocido por nuestra eficiencia, profesionalismo y resultados de calidad. Nos esforzamos por ofrecer un servicio serio, confiable y adaptado a los más altos estándares del sector. Bajo nuestro lema, "Lo primero es el cliente", reafirmamos nuestro compromiso de superar expectativas y construir relaciones sólidas basadas en la confianza y la satisfacción de quienes eligen trabajar con nosotros.
          </TextBox>
        </div>
      </div>


      <br />
      <h1 className='alinearEnColumna'>Cumplimos 70 años</h1>

      <div className="enLinea">
        <div className="izquierda">
          <MediaPicture
            src={regionalImage}
            alt="Descripción de la imagen"
            className="picture-container picture-empresa-main"
          />

        </div>
        <div className='derecha'>
          <TextBox className='text-box-Empresa'>
            Transportes Fernández es una empresa familiar con más de 40 años de actividad. Estamos especializados en transporte regional, cubriendo la zona de La Mancha.
          </TextBox>
        </div>
      </div>



      <div className="enLinea">
        <div className="izquierda">
          <h1>Equipo</h1>
          <TextBox className="text-box-Home-Equipo-CEO">
            Transportes Fernández es una empresa familiar que se caracteriza por haber crecido junto a sus empleados de toda la vida
          </TextBox>
        </div>

        <div className="derecha">
          <EmployeeCard
            className='ceo-card'
            name="Paz Fernández Lozano"
            position="CEO"
            imageUrl={narutoImage}
          />
        </div>
      </div>

      <Background color="#ab273c">
        <div>
          <div className="enLinea">
            <div className="izquierda text-white alinearEnColumna">
              <h1>Conoce al Equipo</h1>
              <TextBox className="text-box-Home-Equipo">
                Nuestro equipo está formado por profesionales altamente capacitados, comprometidos con la excelencia y la satisfacción de nuestros clientes. Cada miembro aporta una combinación única de experiencia, creatividad y pasión por lo que hace, lo que nos permite ofrecer soluciones personalizadas y de alta calidad. Valoramos el trabajo en equipo, la innovación y la comunicación abierta, asegurándonos de que cada proyecto sea gestionado con el máximo cuidado y dedicación. Juntos, trabajamos para superar las expectativas de nuestros clientes y consolidar nuestra posición como líderes en el sector del transporte industrial.
              </TextBox>
            </div>

            <div className="employees-container derecha">
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

          </div>
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