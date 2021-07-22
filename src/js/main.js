import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', function() {   

    const modalTimerId = setTimeout( () => openModal('.modal', modalTimerId), 15000);
    
    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    timer();
    cards();
    calc();
    forms(modalTimerId);
    slider();
   
   
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

    //     alert("Вы используете мобильное устройство (телефон или планшет).");
    
    // } else alert("Вы используете ПК.");


    // LocalStorage

    // localStorage.setItem('number', 5);
    // localStorage.removeItem('number');
    // localStorage.getItem('number');
    // localStorage.clear();

});
