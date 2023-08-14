
let menu = document.querySelector("#menu-icon2");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
    if (menu.classList.contains(["bxs-shopping-bag"])) {
        menu.classList.remove(["bxs-shopping-bag"]);
        menu.classList.add(["bx-x"])
    }
    else {
        menu.classList.add(["bxs-shopping-bag"]);
        menu.classList.remove(["bx-x"])
    }
    navbar.classList.toggle("open")
    console.log("click")
}

const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.banner-content, .newsletter, .blog-header', {delay: 200, origin: "left"})
sr.reveal('.featured-right, .featured-right, .blog-card', {delay: 200, origin: "top"})