import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    $(sliderRef.current).slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: '<button type="button" class="slick-prev custom-arrow"><i class="fas fa-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next custom-arrow"><i class="fas fa-arrow-right"></i></button>',
      dots: true,
    });

    return () => {
      if (sliderRef.current) {
        $(sliderRef.current).slick('unslick');
      }
    };
  }, []);

  const imageList = [
    '/src/assets/images/camion_resized.png',
    '/src/assets/images/camion2_resized.jpg',
    '/src/assets/images/fondo_mar_resized.jpg',
    '/src/assets/images/awa.jpg',
  ];

  return (
    <div className="slider" ref={sliderRef}>
      {imageList.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;