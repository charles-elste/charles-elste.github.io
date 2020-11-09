const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: .25, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.25 });
tl.to(".intro", { y: "-100%", duration: 0.25 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.25 });
tl.fromTo(".nav__links", { opacity: 0 }, { opacity: 1, duration: 0.25 }, "-=1");

// Based on animation code by Dev Ed youtube.com/watch?v=sN93DRYkCO8&t=1310s

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
