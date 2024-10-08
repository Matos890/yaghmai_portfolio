
// animationModule.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);
const rectangle1 = document.querySelector(".rectangle1");

export function initializeAnimation() {
  if (!rectangle1) return; 

  const tl1 = gsap.timeline();
  const tl2 = gsap.timeline();
  let rectangle1dimension = window.getComputedStyle(rectangle1);
  console.log("rectangle1dimension", rectangle1dimension);

  const rectangle2 = document.querySelector(".rectangle2");
  let rectangle2dimension = window.getComputedStyle(rectangle2);

  const fakeRectangle = document.querySelector(".fakeRectangle");
  const fakeDimension = window.getComputedStyle(fakeRectangle);

  const yaghmai = document.querySelector(".yaghmai");
  const yaghmaiDimension = window.getComputedStyle(yaghmai);

  const mattia = document.querySelector(".mattia");
  const mattiaDimension = window.getComputedStyle(mattia);

  const wrapperTextHero = document.querySelector(".text");
  const wrapperTextDimension = window.getComputedStyle(wrapperTextHero);

  const wrapperGrid = document.querySelector(".wrapperGrid");
  const wrapperGridDimension = window.getComputedStyle(wrapperGrid);

  const initializeAnimation = function () {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    gsap.set(rectangle1, {
      x: () => -parseFloat(rectangle1dimension.width),
    });
    gsap.set(wrapperTextHero, {
      y: () => -parseFloat(wrapperTextDimension.height) - 100,
    });
    gsap.set(rectangle2, {
      x: () => parseFloat(rectangle2dimension.width),
    });
    gsap.set(fakeRectangle, {
      transformOrigin: "50% 50%",
    });

    tl1.addLabel("primaReveal");
    tl1.from(fakeRectangle, {
      scale: 0,
    });
    tl1.from(
      fakeRectangle,
      {
        y: () => parseFloat(fakeDimension.height) / 2,
        height: () => parseFloat(fakeDimension.height) * 2 + 1,
        rotation: 90,
        delay: 1,
      },
      "primaReveal"
    );
    tl1.from(
      mattia,
      {
        x: () => parseFloat(mattiaDimension.width) + 200,
        delay: 1,
      },
      "primaReveal"
    );
    tl1.from(
      yaghmai,
      {
        x: () => -parseFloat(yaghmaiDimension.width) - 200,
        delay: 1,
      },
      "primaReveal"
    );
    tl1.addLabel("secondReveal");
    tl1.to(
      rectangle1,
      {
        opacity: 1,
        duration: 0.4,
        x: () => 0,
      },
      "secondReveal"
    );
    tl1.to(
      rectangle2,
      {
        opacity: 1,
        duration: 0.4,
        x: () => 0,
      },
      "secondReveal"
    );
    tl1.to(
      fakeRectangle,
      {
        opacity: 0,
        duration: 0.4,
      },
      "secondReveal"
    );
    tl1.to(wrapperTextHero, {
      y: () => 0,
    });

    if (screenWidth <= 900) {
      tl1.kill();
      tl2.set(fakeRectangle, {
        opacity: 0,
      });
      tl2.set(mattia, {
        opacity: 1,
        y: () => -parseFloat(mattiaDimension.height) * 1.5,
        x: 0,
      });
      tl2.set(yaghmai, {
        y: () => parseFloat(yaghmaiDimension.height) * 1.5,
        x: 0,
      });
      tl2.set(rectangle1, {
        width: () => screenWidth / 3,
        y: () => parseFloat(wrapperGridDimension.height) / 4,
        transformOrigin: "50% 50%",
        rotate: 220,
        opacity: 0,
      });
      tl2.set(rectangle2, {
        width: () => screenWidth / 3,
        transformOrigin: "50% 50%",
        y: () => -parseFloat(wrapperGridDimension.height) / 5,
        rotate: 220,
        opacity: 0,
      });
      tl2.addLabel("revealSmall1");
      tl2.to(
        rectangle1,
        {
          rotate: 0,
          opacity: 1,
          width: () => screenWidth / 1.5,
        },
        "revealSmall1"
      );
      tl2.to(
        rectangle2,
        {
          rotate: 0,
          opacity: 1,
          width: () => screenWidth / 1.5,
        },
        "revealSmall1"
      );
      tl2.addLabel("revealSmall2");
      tl2.to(
        rectangle1,
        {
          y: () => 0,
        },
        "revealSmall2"
      );
      tl2.to(
        rectangle2,
        {
          y: () => 0,
        },
        "revealSmall2"
      );
      tl2.to(
        mattia,
        {
          y: () => 0,
        },
        "revealSmall2"
      );
      tl2.to(
        yaghmai,
        {
          y: () => 0,
        },
        "revealSmall2"
      );
      tl2.to(
        wrapperTextHero,
        {
          y: 0,
        },
        "revealSmall2"
      );
    }
  };

  const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  window.addEventListener(
    "resize",
    debounce(() => {
      tl1.progress(1);
      tl2.progress(1);
      tl1.kill();
      tl2.kill();
      gsap.killTweensOf(tl1);
      gsap.killTweensOf(tl2);

      // Resetta gli stili degli elementi
      const elementsToReset = [
        mattia,
        yaghmai,
        fakeRectangle,
        wrapperGrid,
        wrapperTextHero,
        rectangle1,
        rectangle2,
      ];
      elementsToReset.forEach((element) => {
        element.removeAttribute("style");
      });

      initializeAnimation();
    }, 300)
  );

  initializeAnimation();
}
