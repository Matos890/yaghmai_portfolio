import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";
import cover from "canvas-image-cover";

// Importa le immagini
import emblemataBookmark1 from "../img/Emblemata_1624_bookmark_1.jpg";
import chappeBackground from "../img/chappebackground.png";
import franklinBookmark2 from "../img/Franklin_hand_bookmark_2.jpg";
import magnetism1Background from "../img/magnetism1background.png";
import faraday from "../img/Faraday.png";
import henry from "../img/henry.png";
import railwayMap from "../img/railwaymap.png";
import magnetismBackground2 from "../img/magnetismbackground2.png";
import giornalistiBookmark3 from "../img/giornalisti_bookmark_3.png";
import morseBackground from "../img/morsebackground.png";
import morse from "../img/morse.png";
import testBackground from "../img/testbackground.png";
import morseNotes from "../img/morseNotes.jpg";
import giornalistiBackground from "../img/giornalistibackground.png";
import submarineBookmark4 from "../img/submarine_bookmark_4.jpg";
import shipBackground from "../img/shipbackground.png";
import cyrus from "../img/cyrus.png";
import messageQueen from "../img/messagequeen.png";
import telegraphLines1871 from "../img/1871Telegraph lines.jpg";
import telegraphLines1880 from "../img/1880Telegraph lines.jpg";
import telegraphLines1901 from "../img/1901Telegraph lines.jpg";
import caricatureBackground from "../img/caricaturebackground.png";

gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("myCanvas");
const canvas1 = document.getElementById("myCanvas1");
const frame = document.querySelectorAll("[class^='frame']");
const body = document.querySelector('body');
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
bookmarkFrame.forEach((bookmark) => {
  console.log(bookmark);
});

// IMAGES
const imageSources = [
  emblemataBookmark1,
  chappeBackground,
  franklinBookmark2,
  magnetism1Background,
  faraday,
  henry,
  railwayMap,
  magnetismBackground2,
  giornalistiBookmark3,
  morseBackground,
  morse,
  testBackground,
  morseNotes,
  giornalistiBackground,
  submarineBookmark4,
  shipBackground,
  cyrus,
  messageQueen,
  telegraphLines1871,
  telegraphLines1880,
  telegraphLines1901,
  caricatureBackground,
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
      console.log(bookmark);
    } else {
      images.push(img);
      console.log(images);
    }
  });
}

console.log("this is bookmark", bookmark);
console.log("this is image", images);

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
  cover(bookmark[0], frameBX[0], frameBY[0], frameWidthB[0], frameHeightB[0], {
    mode: "cover",
  })
    .zoom(1.5)
    .pan(0.7, 0)
    .render(ctx);
  //2.
  cover(bookmark[1], frameBX[1], frameBY[1], frameWidthB[1], frameHeightB[1], {
    mode: "cover",
  })
    .zoom(2.5)
    .pan(0.2, 0)
    .render(ctx);
  //3.
  cover(bookmark[2], frameBX[2], frameBY[2], frameWidthB[2], frameHeightB[2], {
    mode: "cover",
  })
    .zoom(1.2)
    .pan(0.295, 0)
    .render(ctx);
  //4.
  cover(bookmark[3], frameBX[3], frameBY[3], frameWidthB[3], frameHeightB[3], {
    mode: "cover",
  })
    .zoom(1.2)
    .pan(0.5, 0)
    .render(ctx);
}

function draw() {
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
  console.log(ratioWH);
  totalWidth =
    (mainWrapper.offsetWidth / ratioWH) + (coverArtSection.offsetHeight * 3) - coverArtSection.offsetHeight;
  document.body.style.height = totalWidth + 'px';
  console.log("width of sectionz", totalWidth);
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
  let { positionContainer1X, gifX, positionContainer2X, endTrigger, distance } = calculatePositionsGif();
  updateCanvas();
});
