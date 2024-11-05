// animations.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);
export const initializeTelegraphAnimation = () => {
  const cover = require("canvas-image-cover");
  const canvas = document.getElementById("myCanvas");
  const canvas1 = document.getElementById("myCanvas1");
  const frame = document.querySelectorAll("[class^='frame']");
  const body = document.querySelector("body");
  const bookmarkFrame = document.querySelectorAll("[class^='bookmarkFrame']");
  const frame1 = document.querySelector(".frame1");
  const sectionz = document.querySelectorAll("section");
  const ctx = canvas.getContext("2d");
  const coverArtSection = document.querySelector(".coverArtSection");
  const introSection = document.querySelector(".introSection");
  const mainWrapper = document.querySelector(".mainWrapper");
  const whiteSpace = document.querySelectorAll(".whiteSpace");
  const ctx1 = canvas1.getContext("2d");
  const scroller = document.querySelectorAll(".scroller");
  ctx.globalCompositeOperation = "source-over";
  //IMAGES
  const imageSources = [
    "/imgTelegraph/Emblemata_1624_bookmark_1.jpg",
    "/imgTelegraph/chappebackground.png",
    "/imgTelegraph/Franklin_hand_bookmark_2.jpg",
    "/imgTelegraph/magnetism1background.png",
    "/imgTelegraph/Faraday.png",
    "/imgTelegraph/henry.png",
    "/imgTelegraph/railwaymap.png",
    "/imgTelegraph/magnetismbackground2.png",
    "/imgTelegraph/giornalisti_bookmark_3.png",
    "/imgTelegraph/morsebackground.png",
    "/imgTelegraph/morse.png",
    "/imgTelegraph/testbackground.png",
    "/imgTelegraph/morseNotes.jpg",
    "/imgTelegraph/giornalistibackground.png",
    "/imgTelegraph/submarine_bookmark_4.jpg",
    "/imgTelegraph/shipbackground.png",
    "/imgTelegraph/cyrus.png",
    "/imgTelegraph/messagequeen.png",
    "/imgTelegraph/1871Telegraphlines.jpg",
    "/imgTelegraph/1880Telegraphlines.jpg",
    "/imgTelegraph/1901Telegraphlines.jpg",
    "/imgTelegraph/caricaturebackground.png",
  ];

  const images = [];
  const bookmark = [];
  function preloadImages(sources, callback) {
    let loadedImages = 0;
    sources.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === sources.length) {
          callback();
        }
      };
      if (img.src.includes("bookmark")) {
        bookmark.push(img);
      } else {
        images.push(img);
      }
    });
  }
  function getDimension() {
    let canvasX = canvas.getBoundingClientRect().left;
    let canvasY = canvas.getBoundingClientRect().top;
    let frameX = [];
    let frameY = [];
    let frameWidth = [];
    let frameHeight = [];
    let frameBX = [];
    let frameBY = [];
    let frameWidthB = [];
    let frameHeightB = [];

    frame.forEach((frame, i) => {
      let rect = frame.getBoundingClientRect();
      frameX.push(rect.left - canvasX);
      frameY.push(rect.top - canvasY);
      frameWidth.push(frame.offsetWidth);
      frameHeight.push(frame.offsetHeight);
    });
    bookmarkFrame.forEach((bookFrame, i) => {
      let rect = bookFrame.getBoundingClientRect();
      frameBX.push(rect.left - canvasX);
      frameBY.push(rect.top - canvasY);
      frameWidthB.push(bookFrame.offsetWidth);
      frameHeightB.push(bookFrame.offsetHeight);
    });
    return {
      frameX,
      frameY,
      frameWidth,
      frameHeight,
      frameBX,
      frameBY,
      frameWidthB,
      frameHeightB,
    };
  }
  function bookmarkPos(bookmark, frameBX, frameBY, frameWidthB, frameHeightB) {
    //1.

    cover(
      bookmark[0],
      frameBX[0],
      frameBY[0],
      frameWidthB[0],
      frameHeightB[0],
      {
        mode: "cover",
      }
    )
      .zoom(1.5)
      .pan(0.7, 0)
      .render(ctx);
    //2.
    cover(
      bookmark[1],
      frameBX[1],
      frameBY[1],
      frameWidthB[1],
      frameHeightB[1],
      {
        mode: "cover",
      }
    )
      .zoom(2.5)
      .pan(0.2, 0)
      .render(ctx);
    //3.

    cover(
      bookmark[2],
      frameBX[2],
      frameBY[2],
      frameWidthB[2],
      frameHeightB[2],
      {
        mode: "cover",
      }
    )
      .zoom(1.2)
      .pan(0.295, 0)
      .render(ctx);
    //4.

    cover(
      bookmark[3],
      frameBX[3],
      frameBY[3],
      frameWidthB[3],
      frameHeightB[3],
      {
        mode: "cover",
      }
    )
      .zoom(1.2)
      .pan(0.5, 0)
      .render(ctx);
  }

  function draw() {
    {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      canvas.setAttribute("width", screenWidth);
      canvas.setAttribute("height", screenHeight);
      canvas1.setAttribute("width", screenWidth);
      canvas1.setAttribute("height", screenHeight);

      let totalWidth = 0;
      scroller.forEach((section) => {
        totalWidth += section.offsetHeight;
      });
      let ratioWH = coverArtSection.offsetWidth / coverArtSection.offsetHeight;
      totalWidth =
        mainWrapper.offsetWidth / ratioWH +
        coverArtSection.offsetHeight * 3 -
        coverArtSection.offsetHeight;
      document.body.style.height = totalWidth + "px";
      // body.setAttribute('height', totalWidth)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
      const {
        frameX,
        frameY,
        frameWidth,
        frameHeight,
        frameBX,
        frameBY,
        frameWidthB,
        frameHeightB,
      } = getDimension();
      bookmarkPos(bookmark, frameBX, frameBY, frameWidthB, frameHeightB);
      images.forEach((imgObj, i) => {
        if (imgObj.src.includes("background")) {
          ctx1.globalAlpha = 0.2;
          ctx1.drawImage(
            imgObj,
            frameX[i],
            frameY[i],
            frameWidth[i],
            frameHeight[i]
          );
          // } else if (imgObj.src.includes("bookmark")) {
          //   cover(imgObj, frameX[i], frameY[i], frameWidth[i], frameHeight[i], {
          //     mode: "cover",
          //   })
          //     .zoom(1.5)
          //     .pan(0.7, 0)
          //     .render(ctx);}
        } else {
          ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
          ctx.shadowBlur = 7;
          ctx.shadowOffsetX = 10;
          ctx.shadowOffsetY = 10;
          ctx.drawImage(
            imgObj,
            frameX[i],
            frameY[i],
            frameWidth[i],
            frameHeight[i]
          );
        }
      });
    }
  }
  function updateCanvas() {
    draw();
    requestAnimationFrame(updateCanvas);
  }
  function calculatePositionsGif() {
    const container1 = document.querySelector(".containerFrame2");
    const positionContainer1X = container1.getBoundingClientRect().left;
    const canvasPositionX = canvas.getBoundingClientRect().left;
    const gifX = positionContainer1X - canvasPositionX;

    const container2 = document.querySelector(".containerFrame2Copy");
    const positionContainer2X = container2.getBoundingClientRect().left;
    const endTrigger = positionContainer2X - canvasPositionX;

    const distance = endTrigger - gifX;

    return {
      positionContainer1X,
      gifX,
      positionContainer2X,
      endTrigger,
      distance,
    };
  }
  preloadImages(imageSources, () => {
    window.addEventListener("resize", draw);
    window.addEventListener("load", draw);
    let {
      positionContainer1X,
      gifX,
      positionContainer2X,
      endTrigger,
      distance,
    } = calculatePositionsGif();

    window.addEventListener("resize", () => {
      ({
        positionContainer1X,
        gifX,
        positionContainer2X,
        endTrigger,
        distance,
      } = calculatePositionsGif());
    });
    ///OPENING
    const tlOpening = gsap.timeline();
    tlOpening.add("diagonali");
    tlOpening.addLabel("redTel");
    tlOpening
      .from(
        ".imgDiag1",
        {
          x: 2000,
          duration: 5,
          ease: "power1.inOut",
          filter: "blur(3px)",
        },
        "diagonali"
      )
      .from(
        ".imgDiag2",
        {
          x: 2000,
          duration: 5,
          filter: "blur(3px)",
        },
        "diagonali"
      )
      .from(
        ".imgRed",
        {
          duration: 2,
          ease: "circ.in",
          scale: 0,
        },
        "diagonali"
      )
      .from(
        ".titleContainer",
        {
          x: 300,
          opacity: 0,
          duration: 3,
          ease: "power3.out",
        },
        "diagonali+=2"
      )
      .from(
        ".squareContainer",
        {
          x: 200,
          opacity: 0,
          ease: "power3.out",
        },
        "diagonali+=2"
      )
      .from(
        ".torpedoFish",
        {
          x: 200,
          duration: 3,
          opacity: 0,
        },
        "diagonali+=2"
      )
      .from(
        ".naveContainer",
        {
          x: 1200,
          duration: 4,
          ease: "power3.inOut",
        },
        "diagonali"
      )
      .from(
        ".telegraphImg",
        {
          duration: 2,
          ease: "circ.in",
          // scale:0,
          opacity: 0,
        },
        "diagonali+=3"
      );

    // MAIN SECTIONS
    gsap.from(".titoloChappe", {
      opacity: 0,
      y: "3vh",
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.from(".spanBookmark", {
      opacity: 0,
      y: "10vh",
      stagger: 0.2,
      duration: 5,
    });
    const sections = gsap.utils.toArray(".mainWrapper .scroller ");
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      duration: 5,
      delay: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".sectioni",
        // markers:true,
        pin: true,
        scrub: 5,
        pinSpacing: false,
        invalidateOnRefresh: true,
        start: "center center",
        end: () =>
          `+=${
            mainWrapper.offsetWidth /
            (coverArtSection.offsetWidth / coverArtSection.offsetHeight)
          }`,
        onUpdate: () => {
          requestAnimationFrame(draw);
        },
      },
    });
    const gifMoving = function () {
      gsap.to(".gif1", {
        x: () => {
          const container1 = document.querySelector(".containerFrame2");
          const positionContainer1X = container1.getBoundingClientRect().left;
          const canvasPositionX = canvas.getBoundingClientRect().left;
          const gifX = positionContainer1X - canvasPositionX;

          const container2 = document.querySelector(".containerFrame2Copy");
          const positionContainer2X = container2.getBoundingClientRect().left;
          const endTrigger = positionContainer2X - canvasPositionX;

          const distance = endTrigger - gifX;
          return distance;
        },
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".gif1",
          // endTrigger:'containerFrame2Copy',
          containerAnimation: scrollTween,
          horizontal: true,
          pin: true,
          scrub: true,
          pinType: "transform",
          pinSpacing: false,
          invalidateOnRefresh: true,
          start: () => `0   ${gifX}`,
          end: () => `center  -${endTrigger}`,
        },
      });

      //-- MAP ANIMATION //
      const tl = gsap.timeline();

      tl.add("start")
        .from(
          map,
          {
            opacity: 0,
            duration: 2,
          },
          "start"
        )
        .from(
          pallini,
          {
            opacity: 0,
            duration: 2,
          },
          "start"
        )
        .from(cities, { opacity: 0, duration: 2 })
        .from(primaEra, { opacity: 0, duration: 2 })
        .from(secondaEra, { opacity: 0, duration: 2 })
        .from(terzaEra, { opacity: 0, duration: 2 })
        .from(after1830, {
          opacity: 0,
          duration: 2,
        });
      ScrollTrigger.create({
        animation: tl, // La timeline da collegare
        containerAnimation: scrollTween,
        trigger: ".p-03", // L'elemento che fa scattare lo ScrollTrigger
        start: "left center",

        end: "+=200", // Quando deve iniziare l'animazione
        // markers: true  // Mostrare i markers per il debug
      });

      const tl1 = gsap.timeline();
      const ages = gsap.utils.toArray(".ageMap ");
      const animationAges = tl1
        .from(ages, {
          y: -50,
          opacity: 0,
          duration: 1,
          stagger: 0.7,
          ease: "power3.inOut",
        })
        .to(ages, {
          x: -50,
          duration: 1,
          stagger: 0.7,
          ease: "power3.inOut",
        });

      ScrollTrigger.create({
        animation: animationAges, // La timeline da collegare
        containerAnimation: scrollTween,
        pinSpacing: false,
        trigger: ".mapdiff", // L'elemento che fa scattare lo ScrollTrigger
        start: "left center",
        // markers: true,
        end: "+=200", // Quando deve iniziare l'animazione
        // markers: true  // Mostrare i markers per il debug
      });
    };

    window.addEventListener("resize", gifMoving());
    requestAnimationFrame(updateCanvas);
  });
};
