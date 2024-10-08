// animations.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);
export const initializeScrollAnimations = () => {
    if(document.title !== 'Mattia Yaghmai - portfolio') return;
  const titleInfo = document.querySelector(".titleInfo");
  if (titleInfo) {
    const titleWrapperInfo = document.querySelector(".titleWrapperInfo");
    let titleIH = titleWrapperInfo.getBoundingClientRect();
    titleIH = titleIH.height;
    const titleWeb = document.querySelector(".titleWeb");
    const titleWrapperWeb = document.querySelector(".titleWrapperWeb");
    let titleWH = titleWrapperWeb.getBoundingClientRect();
    titleWH = titleWH.height;
    const titleMap = document.querySelector(".titleMap");
    const titleWrapperMap = document.querySelector(".titleWrapperMap");
    let titleMH = titleWrapperMap.getBoundingClientRect();
    titleMH = titleMH.height;

    const titleVideo = document.querySelector(".titleVideo");
    let titleVH = titleVideo.getBoundingClientRect();
    titleVH = titleVH.height;
    const mattiaPic = document.querySelector(".mattiaPic");

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
      y: () => -200,
      duration: 0.1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".titleWrapperWeb",
        start: "center bottom",
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

    let mattiaPicScroll = gsap.from(mattiaPic, {
      x: () => 300,
      duration: 0.8,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".introduction",
        start: "10% bottom",
        end: "center center",
      },
    });

    let coverDevScroll = gsap.from(".imgCoverDev", {
      y: () => 400,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".coverDev",
        start: "10% bottom",
        end: "center center",
      },
    });
    let coverMapScroll = gsap.from(".mapImage", {
      y: () => 400,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".mapBox",
        start: "10% bottom",
        end: "center center",
      },
    });
    let coverMotionScroll = gsap.from(".videoImage", {
      y: () => 400,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".mapBox",
        start: "10% bottom",
        end: "center center",
      },
    });

    let sections = gsap.utils.toArray("section");

    sections.forEach((section) => {
      let paragraphs = section.querySelectorAll(".testo");
      paragraphs.forEach((paragraph) => {
        gsap.from(paragraph, {
          y: -120,
          duration: 0.8,
          scrollTrigger: {
            trigger: paragraph,
            start: "10% bottom",
            toggleActions: "play none none none",
          },
        });
      });
    });

    gsap.from(titleWrapperInfo, {
      "--line-width": "0%",
      "--line-position": 2000,
      duration: 1,
      ease: "ease",
      scrollTrigger: {
        trigger: titleWrapperInfo,
        start: "10% bottom",
      },
    });

    gsap.from(titleWrapperWeb, {
      "--line-width": "0%",
      "--line-position": 600,
      duration: 1,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: titleWrapperWeb,
        start: "30% bottom",
      },
    });

    gsap.from(titleWrapperMap, {
      "--line-width": "0%",
      "--line-position": 300,
      duration: 1,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: titleWrapperMap,
        start: "10% bottom",
      },
    });

    gsap.from(".titleWrapperVideo", {
      "--line-width": "0%",
      "--line-position": 300,
      duration: 1,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".titleWrapperVideo",
        start: "10% bottom",
      },
    });
  }
};
