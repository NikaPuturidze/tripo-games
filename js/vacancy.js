document.addEventListener("DOMContentLoaded", () => {
  function handleScroll() {
    const burger = document.querySelector(".group");
    const grid = document.querySelector(".grid");
    const burgerNav = document.querySelector(".burger-nav");
    const main = document.querySelector("body");
    const sendCV = document.getElementById("send-cv")
    const toggleCV = document.getElementById("toggleCV")
    const vacancy = document.querySelector(".vacancy")

    let isInCV = false
    sendCV.style.position = "fixed"
    sendCV.style.display = "none"
    sendCV.style.zIndex = "999999"

    sendCV.addEventListener("click", (event) => {
      sendCV.style.display = "none"
    })

    vacancy.addEventListener("click", (event) => {
      event.stopPropagation()
    })

    toggleCV.addEventListener("click", () => {
      if (!isInCV) {
        sendCV.style.display = "flex"
      } else {
        sendCV.style.display = "none"
      }
    })

    const toMarker = document.getElementById("to-marker");
    toMarker.addEventListener("click", () => {
      burgerNav.style.display = "none";
    });

    let isInHeader = false;

    burger.addEventListener("click", () => {
      if (isInHeader === false) {
        isInHeader = !isInHeader;
        main.style.overflow = "hidden";
        burgerNav.style.position = "fixed";
        grid.classList.toggle("grid-t");
        burgerNav.classList.add("down-fast");
        burgerNav.style.display = "flex";
      } else {
        isInHeader = !isInHeader;
        main.style.overflow = "visible";
        grid.classList.remove("grid-t");
        burgerNav.style.display = "none";
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1010) {
        isInHeader = false;
        burgerNav.style.display = "none";
        grid.classList.remove("grid-t");
      }
    });

    const gamesNav = document.querySelector(".games-d");
    const gamesNavArrow = document.querySelector(".games-d-i");
    const gameSelectorNav = document.querySelector(".g-selector-t");

    let isGamesOpen = false;

    gamesNav.addEventListener("click", () => {
      if (isGamesOpen === false) {
        isGamesOpen = !isGamesOpen;
        gamesNavArrow.style.transform = "rotate(180deg)";
        gameSelectorNav.style.display = "flex";
      } else {
        isGamesOpen = !isGamesOpen;
        gamesNavArrow.style.transform = "rotate(0)";
        gameSelectorNav.style.display = "none";
      }
    });
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);
});
