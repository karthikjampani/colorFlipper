let colors = ["#787060", "#d8b038", "#f0f0e8", "#88a898", "#beb0cd", "#cc7c8a", "#355070", "#ED4C40", "#008080"];
let body = document.querySelector("body");
let count = 0;

body.addEventListener("click", () => {
    count = (count + 1) % colors.length;
    body.style.backgroundColor = colors[count];
});
