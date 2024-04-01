gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  lerp: 0.09,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true },
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var circle = document.querySelector("#circle");
var tl = gsap.timeline();



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
window.addEventListener("mousemove",function(dets){
    // console.log(dets);
    // circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    // Lets Write with the GSAP 
    gsap.to(circle,{
        x:dets.clientX,
        y:dets.clientY,
        duration:0.6,
        ease:Expo
    })
  })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function loading(){
  tl.to("#loader", {
    top: "-150%",
    borderTopLeftRadius: "70%",
    borderBottomLeftRadius: "70%",
    borderBottomRightRadius: "70%", // Add this line to animate the right side as well
    delay: 0.3,
    duration: 3,
    ease: "power3.out", // Adjust easing for animation curve
  });

}
loading();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Vertical Menu
const hamburgerMenu = document.querySelector(".hamburger_menu");
const menu = document.querySelector(".menu");
var vertical_menu = document.querySelector(".vertical_menu");


hamburgerMenu.addEventListener("click", function () {
  menu.classList.toggle("openmenu");
  vertical_menu.classList.toggle("openmenu");
});

locoScroll.on("scroll", function (args) {
  var scrollval = args.scroll.y;

  if (window.innerWidth > 676) {
    if (!vertical_menu.classList.contains("openmenu")) {
      if (scrollval > 55) {
        gsap.to(hamburgerMenu, { duration: 0.03, scale: 1, display: "flex" });
      } else {
        gsap.to(hamburgerMenu, { duration: 0.03, scale: 0, display: "none" });
      }
    } else {
      gsap.to(hamburgerMenu, { duration: 0.03, scale: 1, display: "flex" });
    }
  }
  
  // Update ScrollTrigger
  ScrollTrigger.update();
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const frames = document.querySelectorAll(".frame");

if (frames.length > 0) {
  frames.forEach(frame => {
    frame.addEventListener("mousemove", function(event) {
      const spans = frame.querySelectorAll('span');
      gsap.to(circle,{
        scale:4
    })
      gsap.to(spans, {
        duration: 0.4,
        y: "-5vw"
      });
    });
    frame.addEventListener("mouseleave", function(event) {
      gsap.to(circle,{
        scale:1
    })
      gsap.to(".frame span",{
        duration:.4,
        y:"0vw"

    })
    })
  });
} else {
  console.error('No elements with class "frame" found.');
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++