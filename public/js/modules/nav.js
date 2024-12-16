export function initializeNav() {
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
  if (nav) {
    nav.addEventListener("mouseover", handleHover.bind(0.2));

    nav.addEventListener("mouseout", handleHover.bind(1));
    ///////// STICKY MENU
    if (document.title.includes("-")) {
      const header = document.querySelector(".heroSection");
      const navHeight = nav.getBoundingClientRect().height; // calculate height of navbar to use inside rootMargin
      const stickyNav = function (entries) {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          nav.classList.add("sticky");
          console.log("added");
        } else {
          nav.classList.remove("sticky");
          console.log("qualcosa");
        }
      };
      const headerObserver = new IntersectionObserver(stickyNav, {
        root: null,
        threshold: 0,
        rootMargin: `-${navHeight}px`, //accept only px
      });
      headerObserver.observe(header);
      ///SCROLL INTO VIEW
      document
        .querySelector(".nav__links")
        .addEventListener("click", function (e) {
          e.preventDefault();
          //matching strategy

          if (e.target.classList.contains("nav__link")) {
            const id = e.target.getAttribute("href");
            document.querySelector(id).scrollIntoView({ behavior: "smooth" });
          }
        });
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
    }
  }
}
