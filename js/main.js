'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const humburger = document.querySelector('.humburger');
    const menu = document.querySelector('.menu');
    
    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger-active')
        menu.classList.toggle('menu-actvie');
    });
});