import React, { useMemo } from 'react';
import Carousel from 'react-material-ui-carousel';
import './Carousel.css';

// Función para generar un array de imágenes aleatorias
const generateRandomItems = () => {
  return [
    {
      name: 'Random Name #1',
      image: `https://picsum.photos/1200/500?random=${Math.floor(Math.random() * 1000)}`,
    },
    {
      name: 'Random Name #2',
      image: `https://picsum.photos/1200/500?random=${Math.floor(Math.random() * 1000)}`,
    },
    {
      name: 'Random Name #3',
      image: `https://picsum.photos/1200/500?random=${Math.floor(Math.random() * 1000)}`,
    },
    {
      name: 'Random Name #4',
      image: `https://picsum.photos/1200/500?random=${Math.floor(Math.random() * 1000)}`,
    },
  ];
};

const MyCarousel = () => {
  // Generar elementos de manera aleatoria para cada instancia
  const items = useMemo(() => generateRandomItems(), []);

  return (
    <Carousel
      fullHeightHover={true}
      autoPlay={true}
      animation="slide"
      interval={7000}
      indicators={true}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        className: 'carousel-arrow', // Aplica la clase CSS personalizada a los botones
      }}
    >
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <img src={item.image} alt={item.name} className="carousel-image" />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
