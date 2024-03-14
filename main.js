const menu = document.querySelector('#menu-btn');
const close = document.querySelector('#close-btn');

menu.addEventListener('click',function(){
    document.getElementById('menu').style.right = '0vmax';

})
close.addEventListener('click',function(){
    document.getElementById('menu').style.right = '-60vmax';
})

// script.js
function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }``
  

var tl = gsap.timeline();
function loading(){
    
tl.to(".loader",{
    top:"-100%",
    delay:0.5,
    duration:3,
    ease:"expo.out"
})
}
loading();

var typed = new Typed(".text", {
    strings: ["Frontend developer", "Youtuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
