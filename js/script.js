console.log("Hello everyone");

let header__button = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

header__button.addEventListener("click", () => {
    body.classList.toggle("body--blue");
    themeName.innerText = body.classList.contains("body--blue") ? "różowe" : "niebieskie";
    });