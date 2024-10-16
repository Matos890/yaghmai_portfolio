

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);
export function initializeTransitionHome() {
  if (document.title === "Mattia Yaghmai - portfolio") {
    window.addEventListener("pageshow", () => {
const nav = document.querySelector(".nav");
      gsap.from("section", {
        y: -200,
        duration: 0.5,
      });
      const transitionEl = document.querySelector(".transition");
      transitionEl.classList.add('hideTrans');
      const anchors = document.querySelectorAll(".linkPages");
      setTimeout(() => {
        transitionEl.classList.remove("is-active");
      }, 500);
      for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          let target = e.target.href;
          console.log(target);
          if (nav) {
            nav.classList.remove("sticky");
          }
          transitionEl.classList.add("is-active");
          transitionEl.classList.remove("hideTrans");
          setTimeout(() => {
            window.location.href = target;
          }, 500);
        });
      }
    });
  }
}
