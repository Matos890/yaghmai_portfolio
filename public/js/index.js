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
const nav1 = document.querySelector(".nav1");
if (nav1) {
  document.addEventListener("DOMContentLoaded", () => {
    initializeMenu();
  });
}
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

import { initializeTelegraphAnimation } from "./modules/telegraphAnimation";

// Controlla il titolo per determinare se attivare l'animazione specifica
if (document.title.includes("Telegraph")) {
  const loading = document.getElementById("loading");
  const loader = document.getElementById("loader");
  
  document.addEventListener("DOMContentLoaded", () => {
  
    // Mostra il contenuto principale solo dopo aver nascosto il loader
    initializeTelegraphAnimation();
  });
}

// Nasconde il loader e mostra il contenuto quando la pagina è completamente caricata
window.onload = function () {
  loading.remove();
  loader.remove();
};
