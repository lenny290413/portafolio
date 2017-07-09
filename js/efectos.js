/*FIXED*/
$(document).ready(function(){
	var altura = $('.menu-contenedor').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu-contenedor').addClass('efecto-menu');
		} else {
			$('.menu-contenedor').removeClass('efecto-menu');
		}
	});

});


/*menu*/
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function(){
  nav.classList.toggle('movimiento');
});