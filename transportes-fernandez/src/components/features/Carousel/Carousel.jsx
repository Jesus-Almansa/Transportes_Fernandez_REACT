import React, { useMemo } from 'react';
import Carousel from 'react-material-ui-carousel';
import './Carousel.css';

import image0 from "../../../assets_prod/Carrusel/1.jpg";
import image1 from "../../../assets_prod/Carrusel/0.jpg";
import image2 from "../../../assets_prod/Carrusel/6.jpg";
import image3 from "../../../assets_prod/Carrusel/7.jpg";
import image4 from "../../../assets_prod/Carrusel/8.jpg";

// Algoritmo Fisher–Yates para mezclar un array
function shuffle(array) {
    // arr es igual que la entrada array pero distinto objeto en memoria, para no pisar el original
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      // Math.random() devuelve valores entre [0,1)
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Construye y mezcla el array de imágenes
const imagenesCarrusel = () => {
    const base = [
        { index: 0, image: image0 },
        { index: 1, image: image1 },
        { index: 2, image: image2 },
        { index: 3, image: image3 },
        { index: 4, image: image4 },
    ];

    return shuffle(base);
};

const MyCarousel = () => {
    // Se mezclará solo al montar el componente
    const items = useMemo(() => imagenesCarrusel(), []);

    console.log('Orden del carrusel:', items.map(item => item.index));

    return (
        <Carousel
            fullHeightHover={true}
            autoPlay={true}
            animation="slide"
            interval={7000}
            indicators={true}
            navButtonsAlwaysVisible={true}
            navButtonsProps={{ className: 'carousel-arrow' }}
        >
            {items.map(item => (
                <div key={item.index} className="carousel-item">
                    <img
                        src={item.image}
                        alt={`Imagen ${item.index}`}
                        className="carousel-image"
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default MyCarousel;