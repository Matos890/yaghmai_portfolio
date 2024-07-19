import gsap from "gsap";
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
nav.addEventListener("mouseover", handleHover.bind(0.5));

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
////////////////////////////////////////////////////////////
/////////////////ANIMATION/////////////////////////
/////////////////////////////////////////////////
///////////MEASUREMENTS//////////////////////////////
let rectangle2 = document.querySelector(".rectangle2");
let rectangledimension = document.querySelector(".rectangle1");

const measures = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Reset width and height styles for accurate measurement
  rectangledimension.style.width = "";
  rectangledimension.style.height = "";

  // Get computed styles
  let rDW = window.getComputedStyle(rectangledimension);

  // Extract and convert width and height from computed styles
  let rectangledW = parseFloat(rDW.width);
  let rectangledH = parseFloat(rDW.height);
  
  let rigaHeight = rectangledH / 2;
  let rigaWidth = rectangledW * 2;

  const wrapGrid = document.querySelector(".wrapperGrid");
  const wrapGridPosx = wrapGrid.getBoundingClientRect().x;

  const centerX = screenWidth / 3;
  const centerY = screenHeight / 2;
  const rectangle1 = document.querySelector(".rectangle1");
  const rectangle1Pos = rectangle1.getBoundingClientRect();
  const rectangle2Pos = rectangle2.getBoundingClientRect();

  const findCenter = () => {
    let r1moveX = wrapGridPosx - rectangle1Pos.x;
    let r1moveY = centerY - rectangle1Pos.y;
    let r2moveX = wrapGridPosx - rectangle2Pos.x;
    let r2moveY = centerY - rectangle2Pos.y;
    return { r1moveX, r1moveY, r2moveX, r2moveY };
  };

  let nuovaPos = rectangle1Pos.y - rectangle2Pos.y;

  let { r1moveX, r1moveY, r2moveX, r2moveY } = findCenter();
  
  r1moveX = r1moveX + rigaHeight;
  r2moveX = r2moveX + rigaHeight;
  r2moveY = r2moveY + (rigaHeight / 2);
  r1moveY = r1moveY - (rigaHeight / 2);

  return {
    rectangle1,
    r1moveX,
    rigaWidth,
    rectangle2,
    r2moveX,
    nuovaPos,
    rigaHeight,
    rectangledH,
    rectangledW,
  };
};

///////////////////////////////////////////////////

const openingHome = gsap.timeline();
const initializeAnimation = function () {
  let {
    rectangle1,
    r1moveX,
    rigaWidth,
    rectangle2,
    r2moveX,
    nuovaPos,
    rigaHeight,
    rectangledH,
    rectangledW,
  } = measures();

  gsap.set(rectangle2, {
    opacity: 0,
  });

  gsap.set(rectangle1, {
    transformOrigin: "50% 50%",
    x: r1moveX,
    width: () => rigaWidth,
    gridRow: 1,
    rotate: 0,
  });

  gsap.set(rectangle2, {
    transformOrigin: "50% 50%",
    x: r2moveX,
    y: nuovaPos,
    gridRow: 2,
    width: () => rigaWidth,
    rotate: 0,
    opacity: 0,
  });

  openingHome.addLabel("firstShow");
  openingHome.from(
    rectangle1,
    {
      x: () => rigaWidth + 100,
      duration: 1,
    },
    "firstShow"
  );
  openingHome.from(
    rectangle2,
    {
      x: () => rigaWidth + 100,
      duration: 1,
    },
    "firstShow"
  );

  openingHome.addLabel("animRiga");
  openingHome.fromTo(
    rectangle1,
    {
      x: () => r1moveX,
      rotate: 0,
    },
    {
      rotate: -90,
      delay: 0.8,
      duration: 1,
    },
    "animRiga"
  );

  openingHome.fromTo(
    rectangle2,
    {
      opacity: 1,
      x: () => r2moveX,
      y: nuovaPos,
      rotate: 0,
    },
    {
      rotate: -90,
      delay: 0.8,
      duration: 1,
    },
    "animRiga"
  );

  openingHome.from(
    ".containerMattiaTit",
    {
      opacity: 0,
      delay: 0.8,
      duration: 1,
    },
    "animRiga"
  );

  openingHome.from(
    ".containerYaghmai",
    {
      opacity: 0,
      delay: 0.8,
      duration: 1,
    },
    "animRiga"
  );

  openingHome.set(rectangle1, {
    x: () => -rigaHeight,
    y: () => rectangledH,
    transformOrigin: "0% 0%",
    width: () => rectangledW,
  });

  openingHome.set(rectangle2, {
    x: () => rigaHeight,
    y: () => -rectangledH,
    transformOrigin: "100% 100%",
    width: () => rectangledW,
  });

  openingHome.addLabel("repositioningY");
  openingHome.to(
    rectangle1,
    {
      y: 0,
    },
    "repositioningY"
  );
  openingHome.to(
    rectangle2,
    {
      y: 0,
    },
    "repositioningY"
  );

  openingHome.from(
    ".containerYaghmai",
    {
      y: () => -rectangledH,
    },
    "repositioningY"
  );

  openingHome.addLabel("repositioning");
  openingHome.to(
    rectangle1,
    {
      duration: 2,
      rotate: 0,
    },
    "repositioning"
  );

  openingHome.to(
    rectangle2,
    {
      duration: 2,
      rotate: 0,
    },
    "repositioning"
  );

  openingHome.from(
    ".WrapperTextHero",
    { delay: 1.5, opacity: 0, duration: 2 },
    "repositioning"
  );
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
    openingHome.progress(1);
    gsap.killTweensOf(openingHome);

    rectangledimension.style.width = "";
    rectangledimension.style.height = "";
    rectangle2.style.width = "";
    rectangle2.style.height = "";

    gsap.set(rectangle2, {
      opacity: 0,
    });

    initializeAnimation();
  }, 300)
);

initializeAnimation();

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
    start: "top center",

    end: "center center",
  },
});
let scrollTween2 = gsap.from(titleWeb, {
  y: () => -titleWH,
  duration: 0.1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".titleWrapperWeb",
    start: "center center",
    end: "center center",
  },
});
let scrollTween3 = gsap.from(titleMap, {
  y: () => -titleMH,
  duration: 0.5,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".titleWrapperMap",
    start: "center center",
    end: "center center",
  },
});
let scrollTween4 = gsap.from(titleVideo, {
  y: () => -titleMH,
  duration: 0.5,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".titleWrapperMap",
    start: "center center ",

    end: "center center",
  },
});

let paragraphs = gsap.utils.toArray("section");

let sections = gsap.utils.toArray("section");

sections.forEach((section) => {
  let paragraphs = section.querySelectorAll(".testo");
  paragraphs.forEach((paragraph) => {
    gsap.from(paragraph, {
      y: -200,
      scrollTrigger: {
        trigger: paragraph,
        start: "center center",
        toggleActions: "play none none none",
      },
    });
    console.log(paragraph);
  });
});
