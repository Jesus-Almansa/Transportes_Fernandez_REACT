$(document).ready(function(){
    $('.slider').slick({
        arrows: true,       // Activa las flechas de navegación
        autoplay: false,    // Desactiva el cambio automático de imágenes
        prevArrow: '<button type="button" class="slick-prev custom-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next custom-arrow"><i class="fas fa-arrow-right"></i></button>',
        dots: true          // Agrega puntos de navegación debajo de las imágenes
    });
});
