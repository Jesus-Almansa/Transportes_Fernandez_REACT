import React from 'react';
import Carousel from '../components/features/Carousel/Carousel';
import BoxList from '../components/features/Box/BoxList';
import BoxText from '../components/features/Box/BoxText';
import truckImage from '../assets/images/truck.png';
import EmployeeCard from '../components/features/Employee/EmployeeCard';
import Background from '../components/features/Background/Background';
import employees from '../data/employees';
import narutoImage from '../assets/images/naruto.jpg';
import regionalImage from '../assets/images/Regional.png';
import ContactForm from '../components/features/ContactForm/ContactForm';

function Home() {
  return (
    <div id=''>
      <Carousel />
      <div className="enLinea">
        <div className="izquierda contenedor-principal">
          <h1>Bienvenido a Transportes Fernández</h1>
          <p>Somos una empresa que se dedica al transporte de material industrial. Actualmente queremos realizar el rebranding de la compañía por su 70 aniversario.
            Nos dedicamos exclusivamente al transporte de máquinas y material industrial y no de paquetes pequeños.
            Principalmente realizamos estos servicios para grandes empresas del sector indsutrial.
            Queremos realizar el rebranding modificando el logo, la web (la cual estoy desarrollando actualmente a parte de la que ya hay), la ropa de trabajo, cartas comerciales, sobres, etc...
            Queremos mostrar que realizamos un servicio premium ya que somos caros pero realizamos un trabajo de calidad. Es por que queremos adoptar una imagen de marca profesional y seria que nos distinga. El lema es "Lo primero es el cliente"
          </p>
        </div>


      </div>
      <br />
      <BoxText colorClass='fondoRojo' imageUrl={regionalImage}>
        <div className="alinearEnColumna">
          <h1>Regional</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti.
        </div>
      </BoxText>
      <br />
      <BoxText colorClass='fondoAzul' imageUrl={truckImage}>
        <div className="alinearEnColumna">
          <h1>Nacional</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti.
        </div>
      </BoxText>
      <br />
      <BoxText colorClass='fondoBlanco' imageUrl={truckImage}>
        <div className='alinearEnColumna'>
          <h1>Internacional</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti.
        </div>
      </BoxText>


      <div className="enLinea">
        <div className="izquierda">
          <h1>Equipo</h1>
          <p> Transportes Fernández es una empresa familiar que se caracteriza por haber crecido junto a sus empleados de toda la vida</p>
        </div>

        <div className="derecha">
          <EmployeeCard
            name="Paz Fernández Lozano"
            position="CEO"
            imageUrl={narutoImage}
          />
        </div>
      </div>

      <Background color="#ab273c">
        <div><div className="enLinea">
          <div className="izquierda">
            <p>Conoce a nuestro equipo de trabajo. Estamos comprometidos en brindarte el mejor servicio.</p>
          </div>

          <div className="employees-container">
            {employees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                name={employee.name}
                position={employee.position}
                imageUrl={employee.imageUrl}
              />
            ))}
          </div>
        </div></div>
      </Background>

      <ContactForm />
    </div>
  );
}

export default Home;