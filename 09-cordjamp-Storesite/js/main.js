const hamburger = document.querySelector("#hamburger");
const header = document.querySelector("header");
const mask = document.querySelector(".mask");

hamburger.addEventListener("click", () => {
    header.classList.toggle("open");
});

mask.addEventListener("click", () => {
    header.classList.remove("open");
})
