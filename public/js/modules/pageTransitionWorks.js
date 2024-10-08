import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);
export function initializeTransitionAbout() {
  window.addEventListener("pageshow", () => {
    if (document.title.includes("-")) {
      const nav = document.querySelector(".nav");
      const anchors = document.querySelectorAll(".linkPages");
      for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          let target = e.target.href;
          if (nav) {
            nav.classList.remove("sticky");
          }
          transitionEl.classList.add("is-active");
          setTimeout(() => {
            window.location.href = target;
          }, 500);
        });
      }
    }
  });
  const wordsToAnimate = divideWords();
  animatePage(wordsToAnimate);
  scrollingELements();
}
function divideWords() {
  let aboutMeP = document.querySelectorAll(".aboutWorks");
  let wordsToAnimate = [];

  // Itera su ogni paragrafo selezionato con `querySelectorAll`
  aboutMeP.forEach((paragraph) => {
    // Ottieni il testo del paragrafo
    const text = paragraph.innerText;

    // Dividi il testo in parole
    const words = text.split(" ");

    // Crea il nuovo HTML con gli span
    const newHtml = words
      .map(
        (word) =>
          `<span class="aboutMyWorksPremier"><span class="aboutMyWorks">${word}</span></span>`
      )
      .join(" ");

    // Imposta il nuovo contenuto HTML
    paragraph.innerHTML = newHtml;

    // Seleziona solo le parole nel paragrafo corrente
    let wordstoAnimateParagraph = paragraph.querySelectorAll(".aboutMyWorks");
    wordsToAnimate.push(...wordstoAnimateParagraph);
  });
  return wordsToAnimate;
}
function animatePage(wordsToAnimate) {
  const transitionEl = document.querySelector(".transitionWorks");
  let titles = document.querySelector(".titleWorks");
  const wrapperTextAbout = document.querySelector(".wrapperTextAbout");
  const timeLineTransition = gsap.timeline();
  timeLineTransition.addLabel("textReveal");
  timeLineTransition.from(transitionEl, {
    y: `0vh`,
    duration: 2,
    onComplete:function(){
      if (transitionEl){
        transitionEl.parentNode.removeChild(transitionEl)
      }
    }
  });

  timeLineTransition.from(
    titles,
    {
      y: 500,
      duration: 1.5,
      ease: "easeIn",
    },
    "textReveal"
  );

  timeLineTransition.from(
    wordsToAnimate,
    {
      y: 500,
      scale: 0.5,
      duration: 1.5,
      ease: "easeIn",
      stagger: 0.007,
    },
    "textReveal"
  );
}

  function scrollingELements() {
    const scrollingElementsWork = document.querySelectorAll(
      ".scrollingElementWork"
    );
    const elementTriggerWork = document.querySelectorAll(".elementTriggerWork");
    
    scrollingElementsWork.forEach((element,i) => {
      gsap.from(element, {
        y: 200,
        delay:0.2,
        duration: 1,
        scrollTrigger: elementTriggerWork[i],
      });
    });
  }
