let dragonInitialScrollY = null;
let spaceInitialScrollY = null;

window.addEventListener("scroll", () => {
    function indexY(multiplier, scrollOffset) {
        return multiplier * (window.scrollY - scrollOffset);
    }

    const dragon = document.querySelector(".dragon-wrapper");
    const space = document.querySelector(".space-wrapper");
    const gameBox1 = document.getElementById("game-box1");
    const gameBox2 = document.getElementById("game-box2");
    const gameBox3 = document.getElementById("game-box3");
    const gameBox4 = document.getElementById("game-box4");
    const cat = document.querySelector(".another-cat");
    const join = document.querySelector(".our-team");
    const vacancy = document.querySelector(".vacancy");
    const newsletter = document.querySelector(".newsletter");

    if (isInViewport(gameBox1)) {
        gameBox1.classList.add("slideRight");
    }

    if (isInViewport(gameBox1)) {
        gameBox1.classList.add("slideRight");
    }

    if (isInViewport(gameBox2)) {
        gameBox2.classList.add("slideLeft");
    }

    if (isInViewport(gameBox3)) {
        gameBox3.classList.add("slideRight");
    }

    if (isInViewport(gameBox4)) {
        gameBox4.classList.add("slideLeft");
    }

    if (isInViewport(cat)) {
        cat.classList.add("slideUp");
    }

    if (isInViewport(join)) {
        join.classList.add("slideRight");
    }

    if (isInViewport(vacancy)) {
        vacancy.classList.add("slideRight");
    }

    if (isInViewport(newsletter)) {
        newsletter.classList.add("slideLeft");
    }

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
});

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;

    return (
        rect.top < (window.innerHeight || html.clientHeight) &&
        rect.bottom > 0 &&
        rect.left < (window.innerWidth || html.clientWidth) &&
        rect.right > 0
    );
}
