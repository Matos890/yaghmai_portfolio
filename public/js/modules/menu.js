import gsap from "gsap";

export function initializeMenu() {
  const nav = document.querySelector(".nav");
  const nav1 = document.querySelector(".nav1");
  const screenWidth = window.innerWidth;
  const showModal = document.querySelector(".showModal");
  const burgerMenu = document.getElementById("menuToggle");
  const modalMenu = document.querySelector(".modalWrapper");
  modalMenu.style.opacity = "0";

  if (nav1) {
    const addMenu = function () {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 900) {
        nav.style.display = "none";
        nav1.style.display = "flex";
      } else {
        nav1.style.display = "none";
        nav.style.display = "flex";

        // Chiudi il menu modale se la larghezza dello schermo è maggiore di 900px
        const modalMenu = document.querySelector(".modalWrapper");
        modalMenu.classList.remove("showModal");
        modalMenu.classList.add("hideMenu");
      }
    };

    window.addEventListener("resize", addMenu);
    window.addEventListener("DOMContentLoaded", addMenu);
    addMenu();

    modalMenu.classList.add("hideMenu");

    
    burgerMenu.addEventListener("click", () => {
      modalMenu.style.visibility = 'visible'
      modalMenu.style.opacity = "1"
      modalMenu.classList.toggle("hideMenu");
      modalMenu.classList.toggle("showModal");
      modalMenu.style.opacity = "1";

      // Animazione del menu modale
      if (modalMenu.classList.contains("showModal")) {
        const modalReveal = document.querySelectorAll(".menuModalReveal");
        modalReveal.forEach((reveal) => {
          gsap.from(reveal, {
            opacity: 0,
            y: -100,
            duration: 1,
          });
        });
      }
    });

    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {

      modalMenu.style.visibility = 'hidden'
      modalMenu.style.opacity = "0"
      modalMenu.classList.remove("showModal");
      modalMenu.classList.add("hideMenu");
    });
  }

  if (screenWidth >= 900) {
    modalMenu.classList.add("hideMenu");
  }
}
