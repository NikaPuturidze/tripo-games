let sectionApplyInitialScrollY = null;

document.addEventListener("DOMContentLoaded", () => {
  function handleScroll() {
    function indexY(multiplier, scrollOffset) {
      return multiplier * (window.scrollY - scrollOffset);
    }

    const sectionApply = document.querySelector(".section-apply");
    const sectionApplyContent = document.querySelector(".apply-content");
    if (isInViewport(sectionApplyContent)) sectionApplyContent.classList.add("slideRight");

    if (isInViewport(sectionApply) && sectionApplyInitialScrollY === null) {
      sectionApplyInitialScrollY =
        sectionApply.getBoundingClientRect().top + window.scrollY;
    }

    if (isInViewport(sectionApply) && sectionApplyInitialScrollY !== null) {
      sectionApply.style.backgroundPositionY = `${
        indexY(-0.2, sectionApplyInitialScrollY) - 100
      }px`;
    }

    const burger = document.querySelector(".group");
    const grid = document.querySelector(".grid");
    const burgerNav = document.querySelector(".burger-nav");
    const main = document.querySelector("body");

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
        this.classList.remove("burger-transform");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1010) {
        isInHeader = false;
        burgerNav.style.display = "none";
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

    function isInViewport(element) {
      let { top, bottom, left, right } = element.getBoundingClientRect();
      return (
        top < window.innerHeight &&
        bottom > 0 &&
        left < window.innerWidth &&
        right > 0
      );
    }
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);
});
