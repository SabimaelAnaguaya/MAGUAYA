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

/* HIDE AND SHOW MENUBAR */

let mainUbication = window.pageXOffset;
let navbar = document.querySelector('.navbar');
window.onscroll = function(){
    let actualScroll = window.pageYOffset;
    if(mainUbication >= actualScroll){
        navbar.classList.remove('hide-navbar')
    }else{
        navbar.classList.add('hide-navbar');
    }

    mainUbication = actualScroll;
}


/* OBSERVADOR */

/* ==================================== */

let plan1 = document.querySelector('#plan-1');
let plan2 = document.querySelector('#plan-2');
let plan3 = document.querySelector('#plan-3');
let icon1 = document.querySelector('#icon-1');
let icon2 = document.querySelector('#icon-2');
let icon3 = document.querySelector('#icon-3');


const showL = (entradas, obs) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('showL');
        }else{
            entrada.target.classList.remove('showL');
        }
    });
};

const obs = new IntersectionObserver(showL, {
    root: null,
    rootMargin: '0px',
    threshold: 0
});

obs.observe(plan1);



const showR = (entradas, obsR) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('showR');
        }else{
            entrada.target.classList.remove('showR');
        }
    });
};

const obsR = new IntersectionObserver(showR, {
    root: null,
    rootMargin: '0px',
    threshold: 0
});



obsR.observe(plan3);


const showM = (entradas, obsM) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('showM');
        }else{
            entrada.target.classList.remove('showM');
        }
    });
};

const obsM = new IntersectionObserver(showM, {
    root: null,
    rootMargin: '0px',
    threshold: 0
});



obsM.observe(plan2);
obsM.observe(icon1);
obsM.observe(icon2);
obsM.observe(icon3);





