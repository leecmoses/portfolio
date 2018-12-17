/////////////////////
// Navigation Menu //
/////////////////////
let menu = document.querySelector('#menu');
let page = document.querySelectorAll('header, main, footer');
let nav = document.querySelector('.nav');

menu.addEventListener('click', function(e) {
    nav.classList.toggle('open');
    e.stopPropagation();
});

Array.prototype.forEach.call(page, function(el) {
    el.addEventListener('click', function() {
        nav.classList.remove('open');
    })
});