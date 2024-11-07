// Quiero usar el carrusel de imágenes de Material-UI en mi aplicación de React. ¿Cómo puedo hacerlo?
// Para usar el carrusel de imágenes de Material-UI en tu aplicación de React, primero debes instalar Material-UI en tu proyecto. Puedes hacerlo ejecutando el siguiente comando en la terminal:
// npm install @mui/material @emotion/react @emotion/styled
// Luego, puedes crear un componente Slider.jsx en la carpeta src/components/ de tu proyecto y agregar el siguiente código:
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';

const items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
    image: 'https://picsum.photos/200/300',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
    image: 'https://picsum.photos/200/300',
  },
  {
    name: 'Random Name #3',
    description: 'Hello World!',
    image: 'https://picsum.photos/200/300',
  },
];

const MyCarousel = () => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};

const Item = ({ item }) => (
  <Paper>
    <Box>
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </Box>
  </Paper>
);

export default MyCarousel;
// Luego, puedes importar y usar este componente en tu pantalla Home.jsx de la siguiente manera:
// import React from 'react';
// import MyCarousel from '../components/Slider';
//
// function Home() {
//   return (
//     <div>
//       <h1>Welcome to Transportes Fernandez</h1>
//       <p>This is the Home page where you can find general information.</p>
//       <MyCarousel />
//     </div>
//   );
// }
//
// export default Home; 
// En este ejemplo, hemos creado un componente Slider.jsx que utiliza el carrusel de imágenes de Material-UI. Luego, importamos y usamos este componente en la pantalla Home.jsx para mostrar el carrusel de imágenes en la página de inicio de nuestra aplicación.
//ahora dame los estilos para el carrusel
// Compare this snippet from transportes-fernandez/src/components/Slider.css:
// .carousel-root {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// }
//
// .carousel-item {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   width: 100%;
// }
//
// .carousel-image {
//   max-width: 100%;
//   height: auto;
// }
