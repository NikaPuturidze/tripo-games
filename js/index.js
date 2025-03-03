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

        const aboutDesc = document.querySelector(".about-desc");
        const about = document.querySelector(".about-img");
        const lovely = document.querySelector(".lovely-creature");
        const btnMore = document.querySelector(".more-btn");
        const ourGames = document.querySelector(".our-games");
        const wrap = document.querySelector(".wrap");

        const cat = document.querySelector(".another-cat");
        const join = document.querySelector(".our-team");
        const vacancy = document.querySelector(".vacancy");
        const newsletter = document.querySelector(".newsletter");

        if (isInViewport(gameBox1)) gameBox1.classList.add("slideRight");
        if (isInViewport(gameBox2)) gameBox2.classList.add("slideLeft");
        if (isInViewport(gameBox3)) gameBox3.classList.add("slideRight");
        if (isInViewport(gameBox4)) gameBox4.classList.add("slideLeft");

        if (isInViewport(aboutDesc)) aboutDesc.classList.add("fadeMid");
        if (isInViewport(about)) about.classList.add("fadeLong");
        if (isInViewport(lovely)) lovely.classList.add("fade");
        if (isInViewport(btnMore)) btnMore.classList.add("fadeMid");
        if (isInViewport(ourGames)) ourGames.classList.add("fadeMid");
        if (isInViewport(wrap)) {
            let height = window.innerHeight - wrap.getBoundingClientRect().top
            const range = (height, max) => {
                if (height <= 0) return 0;
                if (height >= max) return 1;
                return height / max;
            };
            wrap.style.opacity = range(height, 1000)
        };

        if (isInViewport(cat)) {
            if (window.innerWidth > 1000) {
                cat.classList.add("fadeLong");
            } else {
                cat.classList.add("slideRight");
            }
        }

        if (isInViewport(join)) join.classList.add("fade");
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
        const contactH = document.getElementById("contact-h")

        let isInHeader = false

        const toMarker = document.getElementById("to-marker");
        toMarker.addEventListener("click", () => {
            burgerNav.style.display = "none"
            main.style.overflow = "visible"
            grid.classList.remove("grid-t");
        })

        contactH.addEventListener("click", () => {
            grid.classList.remove("grid-t");
            main.style.overflow = "visible"
            isInHeader = false
            burgerNav.style.display = "none"
        })

        burger.addEventListener("click", () => {
            if (isInHeader === false) {
                isInHeader = !isInHeader
                main.style.overflow = "hidden"
                burgerNav.style.position = "fixed"
                grid.classList.add("grid-t");
                burgerNav.classList.add("down-fast")
                burgerNav.style.display = "flex"
            } else {
                isInHeader = !isInHeader
                main.style.overflow = "visible"
                grid.classList.remove("grid-t");
                burgerNav.style.display = "none"
            }
        })

        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1010) {
                isInHeader = false
                burgerNav.style.display = "none"
                grid.classList.remove("grid-t");
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
