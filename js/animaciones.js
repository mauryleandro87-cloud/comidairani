/*====================================================
=            ANIMATIONS.JS                           =
====================================================*/

$(document).ready(function () {

    iniciarAnimaciones();

});

/*====================================================
=            INICIALIZAR                             =
====================================================*/

function iniciarAnimaciones(){

    animacionHero();

    revelarSecciones();

    hoverImagenes();

    hoverBotones();

}

/*====================================================
=            HERO                                   =
====================================================*/

function animacionHero(){

    $("#hero")

        .css("opacity","0")

        .animate({

            opacity:1

        },1200);

}

/*====================================================
=            REVELAR SECCIONES                       =
====================================================*/

function revelarSecciones(){

    mostrarSecciones();

    $(window).scroll(function(){

        mostrarSecciones();

    });

}

function mostrarSecciones(){

    $(".reveal").each(function(){

        let ventana = $(window).scrollTop();

        let alturaVentana = $(window).height();

        let posicion = $(this).offset().top;

        if(posicion < ventana + alturaVentana - 120){

            $(this).addClass("visible");

        }

    });

}

/*====================================================
=            EFECTO IMÁGENES                         =
====================================================*/

function hoverImagenes(){

    $(".hero img, .doble-img img, .cultura img, .gastronomia img")

    .hover(

        function(){

            $(this).stop().css({

                transform:"scale(1.04)",

                transition:"0.4s"

            });

        },

        function(){

            $(this).stop().css({

                transform:"scale(1)",

                transition:"0.4s"

            });

        }

    );

}

/*====================================================
=            BOTONES                                =
====================================================*/

function hoverBotones(){

    $(".btn")

    .hover(

        function(){

            $(this).stop().animate({

                marginTop:"-3px"

            },150);

        },

        function(){

            $(this).stop().animate({

                marginTop:"0px"

            },150);

        }

    );

}