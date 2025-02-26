let sectionApplyInitialScrollY = null;

document.addEventListener("DOMContentLoaded", () => {
    function handleScroll() {
        function indexY(multiplier, scrollOffset) {
            return multiplier * (window.scrollY - scrollOffset);
        }

        const sectionApply = document.querySelector(".section-apply")

        if (isInViewport(sectionApply) && sectionApplyInitialScrollY === null) {
            sectionApplyInitialScrollY = sectionApply.getBoundingClientRect().top + window.scrollY;
        }

        if (isInViewport(sectionApply) && sectionApplyInitialScrollY !== null) {
            sectionApply.style.backgroundPositionY = `${indexY(-0.2, sectionApplyInitialScrollY) -100}px`;
        }

        function isInViewport(element) {
            let { top, bottom, left, right } = element.getBoundingClientRect();
            return (
                top < window.innerHeight && bottom > 0 && left < window.innerWidth && right > 0
            );
        }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
});
