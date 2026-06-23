const button = document.getElementById("omikujiButton");
const result = document.getElementById("result");
const omikuji = ["大吉", "中吉", "吉", "凶"];
button.addEventListener("click", () => {
    let number = Math.floor(Math.random() * 4);
    result.textContent = omikuji[number];
});