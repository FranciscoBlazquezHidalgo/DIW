$(document).ready(function () {

    $("#español").click(function () {
  
      español();
  
    });

    $("#ingles").click(function () {
  
        ingles();
    
    });

    $("#frances").click(function () {
  
        frances();
    
    });
  
});

function español(){

    $("#centro").text('Centro');
    $("#noticias").text('Noticias');
    $("#actividades").text('Actividades');
    $("#buscador").attr("placeholder", "Buscar");
    $("#iniciar_sesion").text('Iniciar Sesión');

}

function ingles(){

    $("#centro").text('Center');
    $("#noticias").text('News');
    $("#actividades").text('Activities');
    $("#buscador").attr("placeholder", "Search");
    $("#iniciar_sesion").text('Log in');

}

function frances(){

    $("#centro").text('Centre');
    $("#noticias").text('Informations');
    $("#actividades").text('Activités');
    $("#buscador").attr("placeholder", "Chercher");
    $("#iniciar_sesion").text('Commencer la Session');

    

}