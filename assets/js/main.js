'use strict';

const navMobileButton = document.querySelector('.nav_mobile_button');
const navMobileSpans = document.querySelectorAll('.nav_mobile_button > span');
const navMobile = document.querySelector('.nav_mobile');

console.log(navMobileSpans);

navMobileButton.addEventListener('click', function(e){
    navMobile.classList.remove('hidden_mobile');
})

window.addEventListener('mouseup', function(e) {
    if(e.target != navMobile && e.target != navMobileButton && e.target != navMobileSpans) {
    navMobile.classList.add('hidden_mobile');
    }
})