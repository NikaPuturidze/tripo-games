let sectionApproachInitialScrollY = null;
let sectionFacilitesInitialScrollY = null;

document.addEventListener("DOMContentLoaded", () => {
  function handleScroll() {
    function indexY(multiplier, scrollOffset) {
      return multiplier * (window.scrollY - scrollOffset);
    }

    const sectionApproach = document.querySelector(".section-our-approach");
    const sectionFacilites = document.querySelector(".section-facilities");

    const aboutTripo = document.getElementById("about-tripo");
    const storyHeader = document.querySelector(".story-header");
    const founder1 = document.getElementById("founder1");
    const founder2 = document.getElementById("founder2");
    const founder3 = document.getElementById("founder3");
    const founder4 = document.getElementById("founder4");
    const office = document.getElementById("office-d");
    const explore = document.getElementById("explore-d");

    if (isInViewport(aboutTripo)) aboutTripo.classList.add("fadeShort");
    if (isInViewport(storyHeader)) storyHeader.classList.add("slideRight");
    if (isInViewport(founder1)) founder1.classList.add("fade");
    if (isInViewport(founder2)) founder2.classList.add("fade");
    if (isInViewport(founder3)) founder3.classList.add("fade");
    if (isInViewport(founder4)) founder4.classList.add("fade");
    if (isInViewport(office)) office.classList.add("slideRight");
    if (isInViewport(explore)) explore.classList.add("slideLeft");

    if (
      isInViewport(sectionApproach) &&
      sectionApproachInitialScrollY === null
    ) {
      sectionApproachInitialScrollY =
        sectionApproach.getBoundingClientRect().top + window.scrollY;
    }

    if (
      isInViewport(sectionApproach) &&
      sectionApproachInitialScrollY !== null
    ) {
      sectionApproach.style.backgroundPositionY = `${indexY(
        -0.3,
        sectionApproachInitialScrollY
      )}px`;
    }

    if (
      isInViewport(sectionFacilites) &&
      sectionFacilitesInitialScrollY === null
    ) {
      sectionFacilitesInitialScrollY =
        sectionFacilites.getBoundingClientRect().top + window.scrollY;
    }

    if (
      isInViewport(sectionFacilites) &&
      sectionFacilitesInitialScrollY !== null
    ) {
      sectionFacilites.style.backgroundPositionY = `${indexY(
        -0.3,
        sectionFacilitesInitialScrollY
      )}px`;
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

  function isInViewport(element) {
    let { top, bottom, left, right } = element.getBoundingClientRect();
    return (
      top < window.innerHeight &&
      bottom > 0 &&
      left < window.innerWidth &&
      right > 0
    );
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);
});
