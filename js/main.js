let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("changedheader", window.scrollY > 0);
});