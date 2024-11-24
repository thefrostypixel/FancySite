function onScroll() {
    let flyingCardsState = Math.min(1, Math.max(0, 1.4 * window.scrollY / window.innerHeight) ** .5);
    if (flyingCardsState == 1) {
        document.getElementById("flying-cards").removeAttribute("style");
    } else {
        document.getElementById("title").setAttribute("style", "background-position: " + Math.min(100, flyingCardsState * 130) + "%;");
        document.getElementById("flying-cards").setAttribute("style", "opacity: " + flyingCardsState + "; filter: blur(" + (10 - flyingCardsState * 10) + "px); transform: translateY(" + (flyingCardsState - 1) * 75 + "vh) matrix3d(1, 0, 0, 0, 0, " + (flyingCardsState * .25 + .75) + ", 0, " + (flyingCardsState * .0005 - .0005) + ", 0, 0, 1, 0, 0, 0, 0, 1);");
    }
}
document.addEventListener("scroll", onScroll);
document.addEventListener("load", onScroll);

function onResize() {
    document.getElementById("header-links").hidden = false;
    document.getElementById("header-button").hidden = false;
    document.getElementById("header-expand").hidden = true;
    document.querySelector("header").clientWidth;
    let largeHeader = document.querySelector("header > a").clientWidth == document.querySelector("header > a").scrollWidth;
    document.getElementById("header-links").hidden = !largeHeader;
    document.getElementById("header-button").hidden = !largeHeader;
    document.getElementById("header-expand").hidden = largeHeader;
    console.log(largeHeader);
}
window.addEventListener("resize", onResize);
document.addEventListener("load", onResize);
