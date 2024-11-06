$(document).ready(function() {
    // Lista de rutas de imágenes
    const imageList = [
        "/src/assets/images/camion_resized.png",
        "/src/assets/images/camion2_resized.jpg",
        "/src/assets/images/fondo_mar_resized.jpg",
        "/src/assets/images/awa.jpg"
    ];

    // Selección del contenedor del slider
    const $sliderContainer = $('.slider');

    // Generación de los elementos div con imágenes dentro del contenedor
    imageList.forEach(src => {
        const imageDiv = `<div><img src="${src}" alt="Imagen"></div>`;
        $sliderContainer.append(imageDiv);
    });

    // Inicialización de slick
    $sliderContainer.slick({
        arrows: true,       // Activa las flechas de navegación
        autoplay: true,    // Desactiva el cambio automático de imágenes
        autoplaySpeed: 5000, // Velocidad de cambio de imágenes en milisegundos

        // Personalización de las flechas de navegación
        prevArrow: '<button type="button" class="slick-prev custom-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next custom-arrow"><i class="fas fa-arrow-right"></i></button>',
        dots: true          // Agrega puntos de navegación debajo de las imágenes
    });
});
