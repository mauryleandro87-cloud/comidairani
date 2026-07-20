/*====================================================
=            NAVBAR.JS                               =
====================================================*/

$(document).ready(function () {

    iniciarNavbar();

});

/*====================================================
=            INICIALIZACIÓN                          =
====================================================*/

function iniciarNavbar(){

    activarMenuMovil();

    cerrarMenu();

    detectarPaginaActiva();

    efectoScroll();

}

/*====================================================
=            MENÚ MÓVIL                              =
====================================================*/

function activarMenuMovil(){

    $(".hamburguesa").click(function(){

        $(".navbar").stop(true,true).slideToggle(300);

    });

}

/*====================================================
=            CERRAR MENÚ                             =
====================================================*/

function cerrarMenu(){

    $(".navbar a").click(function(){

        if($(window).width() <= 768){

            $(".navbar").slideUp(300);

        }

    });

}

/*====================================================
=            PÁGINA ACTIVA                           =
====================================================*/

function detectarPaginaActiva(){

    let pagina = window.location.pathname.split("/").pop();

    $(".navbar a").each(function(){

        let enlace = $(this).attr("href");

        if(enlace === pagina){

            $(this).addClass("active");

        }

    });

}

/*====================================================
=            EFECTO SCROLL                           =
====================================================*/

function efectoScroll(){

    $(window).scroll(function(){

        if($(this).scrollTop() > 50){

            $(".header").addClass("scrolled");

        }else{

            $(".header").removeClass("scrolled");

        }

    });

}

/*====================================================
=            REAJUSTAR EN RESIZE                     =
====================================================*/

$(window).resize(function(){

    if($(window).width() > 768){

        $(".navbar").removeAttr("style");

    }

});