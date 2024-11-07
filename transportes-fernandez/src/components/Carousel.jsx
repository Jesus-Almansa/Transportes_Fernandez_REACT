import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Carousel.css';

const items = [
  {
    name: 'Random Name #1',
    image: 'https://picsum.photos/1200/500?random=1',
  },
  {
    name: 'Random Name #2',
    image: 'https://picsum.photos/1200/500?random=2',
  },
  {
    name: 'Random Name #3',
    image: 'https://picsum.photos/1200/500?random=3',
  },
];

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      interval={3000}
      indicators={true}
      navButtonsAlwaysVisible={true}
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
