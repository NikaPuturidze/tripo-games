let sectionIntroInitialScrollY = null;
let sectionAboutInitialScrollY = null;

document.addEventListener("DOMContentLoaded", () => {
    function handleScroll() {
        function indexY(multiplier, scrollOffset) {
            return multiplier * (window.scrollY - scrollOffset);
        }

        const gameBox = document.querySelector(".box")
        const sectionIntro = document.querySelector(".section-intro")
        const sectionAbout = document.querySelector(".section-about")

        if (isInViewport(gameBox)) gameBox.classList.add("slideRight");

        if (isInViewport(sectionIntro) && sectionIntroInitialScrollY === null) {
            sectionIntroInitialScrollY = sectionIntro.getBoundingClientRect().top + window.scrollY;
        }

        if (isInViewport(sectionIntro) && sectionIntroInitialScrollY !== null) {
            sectionIntro.style.backgroundPositionY = `${indexY(-0.3, sectionIntroInitialScrollY) - 70}px`;
        }

        if (isInViewport(sectionAbout) && sectionAboutInitialScrollY === null) {
            sectionAboutInitialScrollY = sectionAbout.getBoundingClientRect().top + window.scrollY;
        }

        if (isInViewport(sectionAbout) && sectionAboutInitialScrollY !== null) {
            sectionAbout.style.backgroundPositionY = `${indexY(-0.3, sectionAboutInitialScrollY) - 70}px`;
        }
    }

    function isInViewport(element) {
        if (!element) return false;
        var rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0 &&
            rect.left < window.innerWidth &&
            rect.right > 0
        );
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
});
