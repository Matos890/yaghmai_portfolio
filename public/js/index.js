import gsap from "gsap";
import barba from "@barba/core";
import { ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);
//////////////////////////////////////////////////////////////////////
////////////////////////////// MENU///////////////////////////////////
///////////////////////////////////////////////////////////////////////
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    //passing arguments this.
    siblings.forEach((el) => {
      if (el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", handleHover.bind(0.2));

nav.addEventListener("mouseout", handleHover.bind(1));
///////// STICKY MENU
const header = document.querySelector(".heroSection");
const navHeight = nav.getBoundingClientRect().height; // calculate height of navbar to use inside rootMargin
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else {
    nav.classList.remove("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //accept only px
});
headerObserver.observe(header);
///SCROLL INTO VIEW
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  //matching strategy

  if (e.target.classList.contains("nav__link")) {
    console.log("Link");
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
////////////////////////////////////////////////////
///////////////////////SCROLLING TITLES///////////////
//////////////////////////////////////////////////////
const titleInfo = document.querySelector(".titleInfo ");
const titleWrapperInfo = document.querySelector(".titleWrapperInfo");
let titleIH = titleWrapperInfo.getBoundingClientRect();
titleIH = titleIH.height;
const titleWeb = document.querySelector(".titleWeb ");
const titleWrapperWeb = document.querySelector(".titleWrapperWeb");
let titleWH = titleWrapperWeb.getBoundingClientRect();
titleWH = titleWH.height;
const titleMap = document.querySelector(".titleMap ");
const titleWrapperMap = document.querySelector(".titleWrapperMap ");
let titleMH = titleWrapperMap.getBoundingClientRect();
titleMH = titleMH.height;
const titleVideo = document.querySelector(".titleVideo ");
let titleVH = titleVideo.getBoundingClientRect();
titleVH = titleVH.height;

let scrollTween1 = gsap.from(titleInfo, {
  y: () => -titleIH,
  duration: 0.5,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".introduction",
    start: "10% bottom",

    end: "center center",
  },
});
let scrollTween2 = gsap.from(titleWeb, {
  y: () => -titleWH,
  duration: 0.1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".titleWrapperWeb",
    start: "10% bottom",
    end: "center center",
  },
});
let scrollTween3 = gsap.from(titleMap, {
  y: () => -titleMH,
  duration: 0.5,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".titleWrapperMap",
    start: "10% bottom",
    end: "center center",
  },
});
let scrollTween4 = gsap.from(titleVideo, {
  y: () => -titleMH,
  duration: 0.5,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".titleWrapperMap",
    start: "10% bottom",

    end: "center center",
  },
});

let paragraphs = gsap.utils.toArray("section");

let sections = gsap.utils.toArray("section");

sections.forEach((section) => {
  let paragraphs = section.querySelectorAll(".testo");
  paragraphs.forEach((paragraph, i) => {
    gsap.from(paragraph, {
      y: -200,
      scrollTrigger: {
        trigger: paragraph,
        start: "10% bottom",
        toggleActions: "play none none none",
      },
    });
    console.log(paragraph);
  });
});
gsap.from(titleWrapperInfo, {
  "--line-width": "0%",
  "--line-position": 2000,
  // delay:0.8,
  duration: 0.8,
  ease: "ease",
  scrollTrigger: {
    trigger: titleWrapperInfo,
    start: "10% bottom",
  },
});
gsap.from(titleWrapperWeb, {
  "--line-width": "0%",
  "--line-position": 600,
  delay: 0.8,
  // delay:1,
  duration: 0.8,
  ease: "circ.inOut",
  scrollTrigger: {
    trigger: titleWrapperWeb,
    start: "10% bottom",
  },
});
gsap.from(titleWrapperMap, {
  "--line-width": "0%",
  "--line-position": 300,
  delay: 0.8,
  // delay:1.2,
  duration: 0.8,
  ease: "circ.inOut",
  scrollTrigger: {
    trigger: titleWrapperMap,
    start: "10% bottom",
  },
});
gsap.from(".titleWrapperVideo", {
  "--line-width": "0%",
  "--line-position": 300,
  delay: 0.8,
  // delay:1.3,
  duration: 0.2,
  ease: "circ.inOut",
  scrollTrigger: {
    trigger: ".titleWrapperVideo",
    start: "10% bottom",
  },
});

////////////////ANIMAZIONE ALTERNATIVA
const tl1 = gsap.timeline();
const tl2 = gsap.timeline();
const rectangle1 = document.querySelector(".rectangle1");
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
  const screenWidth = window.innerWidth; // Aggiungi questa linea
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
//////////////////////////////////////////////////////////////////
///////////////////////////MENU////////////////////////////////////
/////////////////////////////////////////////////////////////////
const nav1 = document.querySelector(".nav1");
const addMenu = function () {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 900) {
    nav.style.display = "none";
    nav1.style.display = "flex";
  } else {
    nav1.style.display = "none";
    nav.style.display = "flex";
  }
};
window.addEventListener("resize", addMenu);
window.addEventListener("DOMContentLoaded", addMenu);
addMenu();

const modalMenu = document.querySelector(".modalWrapper");
modalMenu.classList.add("hideMenu");
const burgerMenu = document.getElementById("menuToggle");
burgerMenu.addEventListener("click", () => {
  modalMenu.classList.toggle("showModal");
  modalMenu.classList.toggle("hideMenu");
});
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  modalMenu.classList.remove("showModal");
  modalMenu.classList.add("hideMenu");
});
/////////////////////////////PAGE TRANSITION////////////

function contentAnimation() {
  const tl4 = gsap.timeline();
  tl4.from("section", { y: 200, duration: 1 });
}

function pageTransition() {
  const tl5 = gsap.timeline();
  tl5.to(".transition", {
    scaleX: 1,
    duration: 1,
    transformOrigin: "left",
  });
  tl5.addLabel("sectionopacity");
  tl5.to(
    ".transition",
    {
      scaleX: 0,
      duration: 0.5,
      delay: 0.2,
      transformOrigin: "left",
    },
    "sectionopacity"
  );
  tl5.to(
    "section",
    {
      opacity: 0,
      duration: 0.2,
    },
    "sectionopacity"
  );
  return tl5; // Restituire la timeline per consentire l'utilizzo delle promesse
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      name: "opacity-transition",
      async leave(data) {
        const done = this.async();
        await pageTransition().then(() => delay(1700)); // Aspetta il completamento di pageTransition prima di continuare
        done();
      },
      async enter(data) {
        contentAnimation();
      },
      async once(data) {
        contentAnimation();
      },
    },
  ],
  views: [
    {
      namespace: "homepage",
      beforeLeave(data) {
        pageTransition();
      },
      beforeEnter(data) {
      initializeAnimation()
      },
    },
  ],
});
