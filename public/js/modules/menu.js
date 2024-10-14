import gsap from "gsap";
export function initializeMenu() {
  const nav = document.querySelector(".nav");
  const nav1 = document.querySelector(".nav1");
  const navModal = document.querySelector(".modalWrapper");
  const showModal = document.querySelector(".showModal");
  if (nav1) {
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
      ///MODALE ANIMAZIONE
      if (modalMenu.classList.contains("showModal")) {
        const modalReveal = document.querySelectorAll(".menuModalReveal");
        console.log("ciao yo", modalReveal);
        modalReveal.forEach((reveal) => {
          gsap.from(reveal, {
            opacity: 0,
            y: -150,
            duration: 1,
            ease:'easeIn'
          });
        });
      }
    });
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
      modalMenu.classList.remove("showModal");
      modalMenu.classList.add("hideMenu");
    });
  }
}
