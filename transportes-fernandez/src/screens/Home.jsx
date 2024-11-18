import React from 'react';
import Carousel from '../components/features/Carousel/Carousel';
import BoxList from '../components/layout/Box/BoxList';
import InfoCard from '../components/layout/Box/InfoCard';
import truckImage from '../assets/images/truck_black.png';
import EmployeeCard from '../components/features/Employee/EmployeeCard';
import Background from '../components/features/Background/Background';
import employees from '../data/employees';
import narutoImage from '../assets/images/naruto.jpg';
import regionalImage from '../assets/images/Regional.png';
import nacionalImage from '../assets/images/nacional.jpg';
import ContactForm from '../components/features/ContactForm/ContactForm';
import TextBox from '../components/layout/Box/TextBox';

function Home() {
  return (
    <div>
      <Carousel />

      <div id='Resumen' className="alinearEnColumna">
        <h1>Bienvenido a Transportes Fernández</h1>
        <div className="enLinea">
          <TextBox className="text-box-Home-Resumen">
            Somos una empresa que se dedica al transporte de material industrial. Actualmente queremos realizar el rebranding de la compañía por su 70 aniversario.
            Nos dedicamos exclusivamente al transporte de máquinas y material industrial y no de paquetes pequeños.
            Principalmente realizamos estos servicios para grandes empresas del sector indsutrial.
            Queremos realizar el rebranding modificando el logo, la web (la cual estoy desarrollando actualmente a parte de la que ya hay), la ropa de trabajo, cartas comerciales, sobres, etc...
            Queremos mostrar que realizamos un servicio premium ya que somos caros pero realizamos un trabajo de calidad. Es por que queremos adoptar una imagen de marca profesional y seria que nos distinga. El lema es "Lo primero es el cliente".El lema es "Lo primero es el cliente"El lema es "Lo primero es el cliente"El lema es "Lo primero es el cliente"El lema es "Lo primero es el cliente"
          </TextBox>
        </div>
      </div>

      <br />
      <InfoCard colorClass='fondoRojo' imageUrl={regionalImage}>
        <div className="alinearEnColumna">
          <h1>Regional</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti.
        </div>
      </InfoCard>
      <br />
      <InfoCard colorClass='fondoAzul' imageUrl={nacionalImage}>
        <div className="alinearEnColumna">
          <h1>Nacional</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti.
        </div>
      </InfoCard>
      <br />
      <InfoCard colorClass='fondoGris' imageUrl={truckImage}>
        <div className='alinearEnColumna'>
          <h1>Internacional</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti.
        </div>
      </InfoCard>
      <br />
      <InfoCard colorClass='fondoNegro' imageUrl={truckImage}>
        <div className='alinearEnColumna'>
          <h1>Espacial</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti.
        </div>
      </InfoCard>



      <div className="enLinea">
        <div className="izquierda">
          <h1>Equipo</h1>
          <TextBox className="text-box-Equipo-CEO">
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
            <div className="izquierda text-white">
              <TextBox className="text-box-Equipo">
                Somos una empresa que se dedica al transporte de material industrial. Actualmente queremos realizar el rebranding de la compañía por su 70 aniversario.
                Nos dedicamos exclusivamente al transporte de máquinas y material industrial y no de paquetes pequeños.
                Principalmente realizamos estos servicios para grandes empresas del sector indsutrial.
                Queremos realizar el rebranding modificando el logo, la web (la cual estoy desarrollando actualmente a parte de la que ya hay), la ropa de trabajo, cartas comerciales, sobres, etc...
                Queremos mostrar que realizamos un servicio premium ya que somos caros pero realizamos un trabajo de calidad. Es por que queremos adoptar una imagen de marca profesional y seria que nos distinga. El lema es "Lo primero es el cliente".El lema es "Lo primero es el cliente"El lema es "Lo primero es el cliente"El lema es "Lo primero es el cliente"El lema es "Lo primero es el cliente"
              </TextBox>
            </div>

            <div className="employees-container">
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

          </div></div>
      </Background>
      <div className="enLinea">
        <h1>¿Tienes alguna duda? Ponte en contacto con nosotros</h1>
      </div>
      <ContactForm />
    </div>
  );
}

export default Home;