let dragonInitialScrollY = null;
let spaceInitialScrollY = null;

document.addEventListener("DOMContentLoaded", () => {
    function handleScroll() {
        function indexY(multiplier, scrollOffset) {
            return multiplier * (window.scrollY - scrollOffset);
        }

        const dragon = document.querySelector(".dragon-wrapper");
        const space = document.querySelector(".space-wrapper");

        const card1 = document.getElementById("card1");
        const card2 = document.getElementById("card2");
        const card3 = document.getElementById("card3");
        const card4 = document.getElementById("card4");

        const gameBox1 = document.getElementById("game-box1");
        const gameBox2 = document.getElementById("game-box2");
        const gameBox3 = document.getElementById("game-box3");
        const gameBox4 = document.getElementById("game-box4");

        const about = document.querySelector(".about-img");
        const cat = document.querySelector(".another-cat");
        const join = document.querySelector(".our-team");
        const vacancy = document.querySelector(".vacancy");
        const newsletter = document.querySelector(".newsletter");

        if (isInViewport(card1)) card1.classList.add("scale");
        if (isInViewport(card2)) card2.classList.add("scale");
        if (isInViewport(card3)) card3.classList.add("scale");
        if (isInViewport(card4)) card4.classList.add("scale");

        if (isInViewport(gameBox1)) gameBox1.classList.add("slideRight");
        if (isInViewport(gameBox2)) gameBox2.classList.add("slideLeft");
        if (isInViewport(gameBox3)) gameBox3.classList.add("slideRight");
        if (isInViewport(gameBox4)) gameBox4.classList.add("slideLeft");

        if (isInViewport(about)) about.classList.add("scale");
        if (isInViewport(cat)) cat.classList.add("slideUp");
        if (isInViewport(join)) join.classList.add("slideRight");
        if (isInViewport(vacancy)) vacancy.classList.add("slideRight");
        if (isInViewport(newsletter)) newsletter.classList.add("slideLeft");

        if (isInViewport(dragon) && dragonInitialScrollY === null) {
            dragonInitialScrollY = dragon.getBoundingClientRect().top + window.scrollY;
        }

        if (isInViewport(space) && spaceInitialScrollY === null) {
            spaceInitialScrollY = space.getBoundingClientRect().top + window.scrollY;
        }

        if (isInViewport(dragon) && dragonInitialScrollY !== null) {
            dragon.style.backgroundPositionY = `${indexY(-0.3, dragonInitialScrollY) - 100}px`;
        }

        if (isInViewport(space) && spaceInitialScrollY !== null) {
            space.style.backgroundPositionY = `${indexY(-0.3, spaceInitialScrollY) - 200}px`;
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
