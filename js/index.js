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

        card1.addEventListener("click", () => {
            window.location.href = "../pages/kipon.html";
        })

        card2.addEventListener("click", () => {
            window.location.href = "../pages/robotrix.html";
        })

        card3.addEventListener("click", () => {
            window.location.href = "../pages/treasure-box.html";
        })

        const gameBox1 = document.getElementById("game-box1");
        const gameBox2 = document.getElementById("game-box2");
        const gameBox3 = document.getElementById("game-box3");
        const gameBox4 = document.getElementById("game-box4");

        const about = document.querySelector(".about-img");
        const cat = document.querySelector(".another-cat");
        const join = document.querySelector(".our-team");
        const vacancy = document.querySelector(".vacancy");
        const newsletter = document.querySelector(".newsletter");
        ``
        if (isInViewport(card1)) card1.classList.add("scale");
        if (isInViewport(card2)) card2.classList.add("scale");
        if (isInViewport(card3)) card3.classList.add("scale");
        if (isInViewport(card4)) card4.classList.add("scale");

        if (isInViewport(gameBox1)) gameBox1.classList.add("slideRight");
        if (isInViewport(gameBox2)) gameBox2.classList.add("slideLeft");
        if (isInViewport(gameBox3)) gameBox3.classList.add("slideRight");
        if (isInViewport(gameBox4)) gameBox4.classList.add("slideLeft");

        if (isInViewport(about)) about.classList.add("scale");

        if (isInViewport(cat)) {
            if (window.innerWidth > 1000) {
                cat.classList.add("slideUp");
            } else {
                cat.classList.add("slideRight");
            }
        }

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

        const burger = document.querySelector(".group")
        const grid = document.querySelector(".grid")
        const burgerNav = document.querySelector(".burger-nav")
        const main = document.querySelector("body")

        let isInHeader = false

        burger.addEventListener("click", () => {
            if (isInHeader === false) {
                isInHeader = !isInHeader
                main.style.overflow = "hidden"
                burgerNav.style.position = "fixed"
                grid.classList.toggle("grid-t");
                burgerNav.classList.add("down-fast")
                burgerNav.style.display = "flex"
            } else {
                isInHeader = !isInHeader
                main.style.overflow = "visible"
                grid.classList.remove("grid-t");
                burgerNav.style.display = "none"
                this.classList.remove("burger-transform")
            }
        })

        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1010) {
                isInHeader = false
                burgerNav.style.display = "none"
            }
        })

        const gamesNav = document.querySelector(".games-d")
        const gamesNavArrow = document.querySelector(".games-d-i")
        const gameSelectorNav = document.querySelector(".g-selector-t")

        let isGamesOpen = false

        gamesNav.addEventListener("click", () => {
            if (isGamesOpen === false) {
                isGamesOpen = !isGamesOpen
                gamesNavArrow.style.transform = "rotate(180deg)";
                gameSelectorNav.style.display = "flex"
            } else {
                isGamesOpen = !isGamesOpen
                gamesNavArrow.style.transform = "rotate(0)";
                gameSelectorNav.style.display = "none"
            }
        })
    }

    function isInViewport(element) {
        let { top, bottom, left, right } = element.getBoundingClientRect();
        return (
            top < window.innerHeight && bottom > 0 && left < window.innerWidth && right > 0
        );
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
});
