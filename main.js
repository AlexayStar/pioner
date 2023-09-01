'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const humburger = document.querySelector('.humburger');
    const menu = document.querySelector('.menu');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger-active')
        menu.classList.toggle('menu-actvie');
    });

    window.addEventListener('resize', ()=> {
        if (window.innerWidth > 1150) {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});

console.log(window.innerWidth);