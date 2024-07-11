import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
function scaleGrid() {
  let widthScreen = window.innerWidth;
  console.log(widthScreen);
  let heroSection = document.querySelector(".heroSection");
  const grid = document.querySelector(".wrapperGrid");
  heroSection.setAttribute("width", widthScreen);
  const scale = () => {
    let scaleSection = 0;
    if (widthScreen === 2560) return (scaleSection = 1);
    else {
      return (scaleSection = widthScreen / 25.6 / 100);
    }
  };
  grid.style.scale = `${scale()}`;
}
window.addEventListener("resize", scaleGrid);
scaleGrid();
