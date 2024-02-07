const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () =>{

    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
const lupa = document.querySelector('.icon1');
const pes = document.querySelector('.search');

lupa.addEventListener('click', () => {
    lupa.style.display = 'none';
    pes.style.display = 'block';
})
const what = document.querySelector('.icon');
const tell = document.querySelector('.tel');
