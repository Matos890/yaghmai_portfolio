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
  const aboutMeP = document.querySelectorAll(".aboutWorks");
  let wordsToAnimate = [];

  aboutMeP.forEach((paragraph) => {
    const words = [];
    
    // Split the paragraph's HTML content using regex to handle words and tags separately
    paragraph.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        // Split the text node into words
        node.textContent.split(" ").forEach((word) => {
          if (word.trim()) {
            words.push(`<span class="aboutMyWorksPremier"><span class="aboutMyWorks">${word}</span></span>`);
          }
        });
      } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "STRONG") {
        // Handle <strong> elements by wrapping words inside them
        const strongWords = node.innerText.split(" ").map((word) => {
          return `<span class="aboutMyWorksPremier"><strong><span class="aboutMyWorks">${word}</span></strong></span>`;
        });
        words.push(...strongWords);
      } else {
        // Append any other nodes without modification
        words.push(node.outerHTML);
      }
    });

    // Join the processed words array and set the new HTML
    paragraph.innerHTML = words.join(" ");

    // Select the newly added spans for animation
    const wordsToAnimateParagraph = paragraph.querySelectorAll(".aboutMyWorks");
    wordsToAnimate.push(...wordsToAnimateParagraph);
  });

  return wordsToAnimate;
}

function animatePage(wordsToAnimate) {
  const transitionEl = document.querySelector(".transitionWorks");
  const transitionEl1 = document.querySelector(".transitionWorks1");
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
