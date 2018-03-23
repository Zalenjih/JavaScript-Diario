var btnMenu = document.getElementById('btn_menu');
var nav = document.getElementById('nav');
var body = document.getElementById('body');

btnMenu.addEventListener('click', function(){
    body.classList.toggle('mostrarOpacidad');
    nav.classList.toggle('mostrarMenu');
});