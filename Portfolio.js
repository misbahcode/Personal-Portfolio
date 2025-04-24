const menu = document.querySelector('.menu');
const openmenu = document.querySelector('.openmenu');

openmenu.addEventListener('click', show);

function show() {
    menu.classList.toggle('active-menu');
}
