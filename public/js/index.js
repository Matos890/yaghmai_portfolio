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
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const wrapGrid = document.querySelector(".wrapperGrid");
const wrapGridPosx = wrapGrid.getBoundingClientRect();
console.log(wrapGridPosx.x);
const centerX = screenWidth / 3;
const centerY = screenHeight / 2;
const rectangle1 = document.querySelector(".rectangle1");
const rectangle2 = document.querySelector(".rectangle2");
const rectangle1Pos = rectangle1.getBoundingClientRect();
const rectangle2Pos = rectangle2.getBoundingClientRect();
console.log(rectangle1Pos.x);
const findCenter = () => {
  let r1moveX = wrapGridPosx.x - rectangle1Pos.x;
  let r1moveY = centerY - rectangle1Pos.y;
  let r2moveX = wrapGridPosx.x - rectangle2Pos.x;
  let r2moveY = centerY - rectangle2Pos.y;
  return { r1moveX, r1moveY, r2moveX, r2moveY };
};
let nuovaPos = rectangle1Pos.y - rectangle2Pos.y;

console.log(centerX, centerY);
let { r1moveX, r1moveY, r2moveX, r2moveY } = findCenter();
r1moveX = r1moveX + 4 * 10;

r2moveX = r2moveX + 4 * 10;
r2moveY = r2moveY + 2 * 10;
r1moveY = r1moveY - 2 * 10;
gsap.set(rectangle1, {
  x: r1moveX,
  width: `179rem`,
  gridRow: 1,
  // alignContent:'center',
  rotate: 0,
  // opacity:0
});
gsap.set(rectangle2, {
  x: r2moveX,
  y: nuovaPos,
  gridRow: 2,
  width: `179rem`,
  // y:r2moveY,
  rotate: 0,
});
// gsap.from(rectangle1, {
//   x: () => r1moveX,
//   y: () => r1moveY,
//   duration: 5,
//   rotate: -90,
// });
// gsap.from(rectangle2, {
//   x: () => r2moveX,
//   y: () => r2moveY,
//   duration: 5,
//   rotate: 90,
// });
const openingHome = gsap.timeline();
openingHome.addLabel("firstShow");
openingHome.from(
  rectangle1,
  {
    x: "185rem",
    duration: 1,
  },
  "firstShow"
);
openingHome.from(
  rectangle2,
  {
    x: "185rem",
    duration: 1,
  },
  "firstShow"
);
openingHome.addLabel("animRiga");
// openingHome.set(rectangle1, {

//   x: r1moveX,
//   width: `183rem`,
//   rotate: 0,
// },

//   "animRiga"
// )
openingHome.fromTo(
  rectangle1,
  {
    x: () => r1moveX,
    rotate: 0,
    // opacity:0
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
  // x:-7,
  x: `-4rem`,
  y: `9rem`,

  transformOrigin: "0% 0%",
  width: "89.5rem",
});
openingHome.set(rectangle2, {
  // x: 0,
  x: `4rem`,

  y: `-9rem`,
  transformOrigin: "100% 100%",
  width: "89.5rem",
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
    y: `-9rem`,
  },
  "repositioningY"
);
openingHome.addLabel("repositioning");
openingHome.to(
  rectangle1,
  {
    duration: 2,
    // transformOrigin:'50% 50%',
    rotate: 0,
  },
  "repositioning"
);
openingHome.to(
  rectangle2,
  {
    // transformOrigin:'50% 50%',
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
openingHome.addLabel("repositioningGrid");
// openingHome.to(
//   rectangle1,
//   {
//     x: 0,
//     duration: 1,
//   },
//   "repositioningGrid"
// );
// openingHome.to(
//   rectangle2,
//   {
//     x: 0,
//     duration: 1,
//     transformOrigin: "0% 0% ",
//   },
//   "repositioningGrid"
// );
////////////////////////////////////////////////////
///////////////////////SCROLLING TITLES///////////////
//////////////////////////////////////////////////////
const titleInfo = document.querySelector(".titleInfo ");
const titleWeb = document.querySelector(".titleWeb ");
const titleMap = document.querySelector(".titleMap ");
const titleVideo = document.querySelector(".titleVideo ");

let scrollTween1 = gsap.from(titleInfo, {
  y: -150,
  duration: 0.5,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".introduction",
    start: "top center",
    
    markers:true,
    end: "center center",
  },
});
let scrollTween2 = gsap.from(titleWeb, {
  y: -150,
  duration: 0.1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".titleWrapperWeb",
    start: "center center",
    end: "center center",
  },
});
let scrollTween3 = gsap.from(titleMap, {
  y: -150,
  duration: 0.5,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".titleWrapperMap",
    start: "center center",
    end: "center center",
  },
});
let scrollTween4 = gsap.from(titleVideo, {
  y: -150,
  duration: 0.5,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "WrapperMap",
    start: "center center ",

    end: "center center",
  },
});


let paragraphs = gsap.utils.toArray('section');

const titleII= document.querySelectorAll(`[class^="titleWrapper"]`);
console.log(titleII)
paragraphs.forEach((wrapper, i) => {
  const paragraph = wrapper.querySelector('.testo');
  if (paragraph) {
    gsap.from(paragraph, {
      y: -200,
      scrollTrigger: {
        trigger:titleII[i],
        start: 'center center',
        toggleActions: 'play none none none'
      }
    });
  }
});
