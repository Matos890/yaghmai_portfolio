import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);
const logoNav = document.querySelector(".animatedLogo");
document.addEventListener("DOMContentLoaded", () => {});
//////////////////////////////////////////////////////////////////////
////////////////////////////// NAV ///////////////////////////////////
///////////////////////////////////////////////////////////////////////
import { initializeNav } from "./modules/nav";
document.addEventListener("DOMContentLoaded", () => {
  initializeNav();
});
////////////////////////////////////////////////////////////////////
///////////////////////SCROLLING TITLES AND ELEMENTS///////////////
//////////////////////////////////////////////////////////////////
import { initializeScrollAnimations } from "./modules/scrollingTitleAnimation";
document.addEventListener("DOMContentLoaded", () => {
  initializeScrollAnimations();
});
////////////////ANIMAZIONE ALTERNATIVA
//////////////////////////////////////////////////////////////////
import { initializeAnimation } from "./modules/animazioneHome";
initializeAnimation();
///////////////////////////MENU////////////////////////////////////
/////////////////////////////////////////////////////////////////
import { initializeMenu } from "./modules/menu";
document.addEventListener("DOMContentLoaded", () => {
  initializeMenu();
});
/////////////////////////////PAGE TRANSITION HOME////////////
import { initializeTransitionHome } from "./modules/pageTranstionHome";
document.addEventListener("DOMContentLoaded", () => {
  initializeTransitionHome();
});
////////////////////////////PAGE TRANSITION ABOUT ME /////////////
import { initializeTransitionAbout } from "./modules/pageTransitionWorks";
if (document.title.includes("|"))
  document.addEventListener("DOMContentLoaded", () => {
    initializeTransitionAbout();
  });
////////////////////ANIMATION ELEMENTS WITH SCROLL//////
// import { scrollingELements } from "./modules/scrollingElementsWork";
// if(document.title.includes('|'))
// document.addEventListener('DOMContentLoaded',()=>{
//   scrollingELements();

// })
