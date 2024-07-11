import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
function scaleGrid() {
  let widthScreen = window.innerWidth;
  console.log(widthScreen);
  let heroSection = document.querySelector(".heroSection");
  const grid = document.querySelectorAll(".wrapperSection");
  const section = document.querySelectorAll("section");
  heroSection.setAttribute("width", widthScreen);
  const scale = () => {
    let scaleSection = 0;
    if (widthScreen === 2560) return (scaleSection = 1);
    else {
      return (scaleSection = widthScreen / 25.6 / 100);
    }
  };
  section.forEach((s)=>{
  s.setAttribute("width", widthScreen);
  })
grid.forEach((sect)=>{
  sect.style.scale = `${scale()}`;
  
})
}
window.addEventListener("resize", scaleGrid);

scaleGrid();
// MENU
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    //passing arguments this.
    siblings.forEach(el => {
      if (el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));
// STICKy
const header = document.querySelector('.heroSection');
const navHeight = nav.getBoundingClientRect().height; // calculate height of navbar to use inside rootMargin
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else {
    nav.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //accept only px
});
headerObserver.observe(header);