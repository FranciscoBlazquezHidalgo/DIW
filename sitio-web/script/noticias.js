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

    $("#biblioteca").text('Biblioteca');
    $("#patio").text('Patio');
    $("#entrada").text('Entrada');

    $("#descripcion").text('Centro de Educación Secundaria Obligatoria y Formación Profesional');

    $("#noticas_destacadas").text('Noticias destacadas');

    $("#titulo_n1").text('Curso escolar 2021/2022');
    $("#texto_n1").text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui.');
    
    $("#titulo_n2").text('Protocolo COVID-19');
    $("#texto_n2").text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui.');

    $("#oferta").text('Oferta formativa');

    $("#titulo_o1").text('Educación Secundaria Obligatoria');
    $("#texto_o1").text('Primer y segundo ciclo de Educación Secundaria Obligatoria');

    $("#titulo_o2").text('Bachillerato');
    $("#texto_o2").text('Ciencias');
    $("#texto_o3").text('Humanidades');
    $("#texto_o4").text('Ciencias Sociales');

    $("#titulo_o3").text('Ciclo de Formación Profesional Básica');
    $("#texto_o5").text('Servicios Administrativos');
    $("#texto_o6").text('Informática y Comunicaciones');

    $("#titulo_o4").text('Ciclo de Formación Profesional Media');
    $("#texto_o7").text('Gestión Administrativa');
    $("#texto_o8").text('Instalaciones de Telecomunicaciones');
    $("#texto_o9").text('Sistemas Microinformáticos y Redes');
    
    $("#titulo_o5").text('Ciclo de Formación Profesional Superior');
    $("#texto_o10").text('Enseñanza y Animación Sociodeportiva');
    $("#texto_o11").text('Administración y Finanzas');
    $("#texto_o12").text('Administración de Sistemas Informáticos y Redes');
    $("#texto_o13").text('Desarrollo de Aplicaciones Web');
    $("#texto_o14").text('Sistemas de Telecomunicación e Informáticos');

    $("#titulo_o6").text('Cursos de Especialización');
    $("#texto_o15").text('Curso de Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información');

    $("#direcciones").text('Otras direcciones');
    $("#portal_empleo").text('Portal de empleo');
    $("#redes_sociales").text('Redes sociales');
    $("#contacto").text('Contacto');

}

function ingles(){

    $("#centro").text('Center');
    $("#noticias").text('News');
    $("#actividades").text('Activities');
    $("#buscador").attr("placeholder", "Search");
    $("#iniciar_sesion").text('Log in');

    $("#biblioteca").text('Library');
    $("#patio").text('Playground');
    $("#entrada").text('Entry');

    $("#descripcion").text('Compulsory Secondary Education and Vocational Training Center');

    $("#noticas_destacadas").text('Outstanding news');

    $("#titulo_n1").text('School year 2021/2022');
    $("#texto_n1").text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui.');
    
    $("#titulo_n2").text('Protocolo COVID-19');
    $("#texto_n2").text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui.');

    $("#oferta").text('Training offer');

    $("#titulo_o1").text('Compulsory Secondary Education');
    $("#texto_o1").text('First and second cycle of Compulsory Secondary Education');

    $("#titulo_o2").text('High school');
    $("#texto_o2").text('Sciences');
    $("#texto_o3").text('Humanities');
    $("#texto_o4").text('Social Sciences');

    $("#titulo_o3").text('Basic Vocational Training Cycle');
    $("#texto_o5").text('Administrative services');
    $("#texto_o6").text('IT and Communications');

    $("#titulo_o4").text('Medium Vocational Training Cycle');
    $("#texto_o7").text('Gestión Administrativa');
    $("#texto_o8").text('Telecommunications Facilities');
    $("#texto_o9").text('Microcomputer systems and networks');
    
    $("#titulo_o5").text('Higher Vocational Training Cycle');
    $("#texto_o10").text('Teaching and Socio-sports Animation');
    $("#texto_o11").text('Administration and finance');
    $("#texto_o12").text('Administration of Computer Systems and Networks');
    $("#texto_o13").text('Web applications development');
    $("#texto_o14").text('Telecommunication and Computer Systems');

    $("#titulo_o6").text('Specialization Courses');
    $("#texto_o15").text('Specialization Course in Cybersecurity in Information Technology Environments');

    $("#direcciones").text('Other addresses');
    $("#portal_empleo").text('Employment website');
    $("#redes_sociales").text('Social Media');
    $("#contacto").text('Contact');

}

function frances(){

    $("#centro").text('Centre');
    $("#noticias").text('Informations');
    $("#actividades").text('Activités');
    $("#buscador").attr("placeholder", "Chercher");
    $("#iniciar_sesion").text('Commencer la Session');

    $("#biblioteca").text('Bibliothèque');
    $("#patio").text('Terrain de jeux');
    $("#entrada").text('Entrée');

    $("#descripcion").text('Centre d Enseignement Secondaire Obligatoire et de Formation Professionnelle');

    $("#noticas_destacadas").text('Nouvelles exceptionnelles');

    $("#titulo_n1").text('Année scolaire 2021/2022');
    $("#texto_n1").text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui.');
    
    $("#titulo_n2").text('Protocole COVID-19');
    $("#texto_n2").text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui.');

    $("#oferta").text('Offre de formation');

    $("#titulo_o1").text('Éducation Secondaire Obligatoire');
    $("#texto_o1").text('Premier et deuxième cycle de l enseignement secondaire obligatoire');

    $("#titulo_o2").text('Lycée');
    $("#texto_o2").text('Les sciences');
    $("#texto_o3").text('Sciences Humaines');
    $("#texto_o4").text('Sciences Sociales');

    $("#titulo_o3").text('Cycle de Formation Professionnelle de Base');
    $("#texto_o5").text('Services Administratifs');
    $("#texto_o6").text('Informatique et Communication');

    $("#titulo_o4").text('Cycle Moyen de Formation Professionnelle');
    $("#texto_o7").text('Gestion Administrative');
    $("#texto_o8").text('Installations de Télécommunications');
    $("#texto_o9").text('Systèmes et Réseaux Micro-informatiques');
    
    $("#titulo_o5").text('Cycle de Formation Professionnelle Supérieure');
    $("#texto_o10").text('Enseignement et Animation Socio-sportive');
    $("#texto_o11").text('Administration et Finances');
    $("#texto_o12").text('Administration des Systèmes Informatiques et des Réseaux');
    $("#texto_o13").text('Développement d Applications Web');
    $("#texto_o14").text('Télécommunications et Systèmes Informatiques');

    $("#titulo_o6").text('Cours de Spécialisation');
    $("#texto_o15").text('Cours de Spécialisation en Cybersécurité dans les Environnements des Technologies de l Information');

    $("#direcciones").text('Autres Adresses');
    $("#portal_empleo").text('Site de l emploi');
    $("#redes_sociales").text('Réseaux sociaux');
    $("#contacto").text('Contact');

}