const menu = document.querySelector('#menu-btn');
const close = document.querySelector('#close-btn');

menu.addEventListener('click',function(){
    document.getElementById('menu').style.right = '0vmax';

})
close.addEventListener('click',function(){
    document.getElementById('menu').style.right = '-60vmax';

})

var typed = new Typed(".text", {
    strings: ["Frontend developer", "Youtuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
