import React from 'react';
import Carousel from '../components/Carousel';
import BoxList from '../components/BoxList';
import BoxText from '../components/BoxText';
import truckImage from '../assets/images/truck.png';

function Home() {
  return (
    <div id=''>
      <Carousel />
      <div className="enLinea">
        <div className="izquierda">
          <h1>Bienvenido a Transportes Fernández</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti. Morbi sed fermentum odio, eu mollis arcu. Fusce nec tellus facilisis, rhoncus ante vitae, tincidunt nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis facilisis nunc ut ante consequat, ac aliquet lorem mattis.</p>
        </div>

        <div className="derecha">
          <BoxList>
            <ul>
              <li>Transporte de mercancías</li>
              <li>Transporte de pasajeros</li>
              <li>Transporte de animales</li>
              <li>Transporte de animales</li>
            </ul>
          </BoxList>
        </div>
      </div>

      <BoxText colorClass='fondoRojo' imageUrl={truckImage}>
        <div className="alinearEnColumna">
          <h1>Transporte regional</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti.
        </div>
      </BoxText>
      <br />
      <BoxText colorClass='fondoAzul' imageUrl={truckImage}>
        <div className="alinearEnColumna">
          <h1>Transporte nacional</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti.
        </div>
      </BoxText>
      <br />
      <BoxText colorClass='fondoRojo' imageUrl={truckImage}>
        <div className='alinearEnColumna'>
          <h1>Transporte internacional</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti.
        </div>
      </BoxText>


      <div className="enLinea">
        <div className="izquierda">
          <h1>Equipo</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nec arcu congue convallis. Fusce tristique sagittis lectus, et porttitor ante venenatis cursus. Quisque leo nibh, tincidunt ut tristique a, semper sit amet lorem. Nam nisi quam, fringilla vitae ultricies tincidunt, pretium ut ipsum. Etiam non erat magna. Suspendisse potenti. Morbi sed fermentum odio, eu mollis arcu. Fusce nec tellus facilisis, rhoncus ante vitae, tincidunt nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis facilisis nunc ut ante consequat, ac aliquet lorem mattis.</p>
        </div>

        <div className="derecha">
          <BoxList>

          </BoxList>
        </div>
      </div>

    </div>
  );
}

export default Home;