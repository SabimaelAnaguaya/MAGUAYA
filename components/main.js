/* EFECTO SHOW NAVLIST */

let btnLines = document.querySelector('.lines');
let lines = document.querySelectorAll('.line');

let navlist = document.querySelector('.navlist')

let bgTop = document.querySelector('.bg-top')
let bgMiddle = document.querySelector('.bg-middle')
let bgBottom = document.querySelector('.bg-bottom')


function showNavlist(){
    /* Efecto boton menu hamburguesa */
    lines[0].classList.toggle('e-line_1');
    lines[1].classList.toggle('e-line_2');
    lines[2].classList.toggle('e-line_3');

    navlist.classList.toggle('show-navlist');

    bgTop.classList.toggle('show-t')
    bgMiddle.classList.toggle('show-b')
    bgBottom.classList.toggle('show-b')
}

btnLines.addEventListener('click', showNavlist);