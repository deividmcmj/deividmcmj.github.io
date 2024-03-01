const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");
const menu = document.querySelector("#menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelector(".nav-link");

let spanishText = document.querySelectorAll(".spanish");
let englishText = document.querySelectorAll(".english");

let spanish = true;

desplazarArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

menu.addEventListener("click", () => {
    ul.classList.toggle("show");
});

navLink.forEach((link) => link.addEventListener("click", () => {
    ul.classList.remove("show");
}));

function changeLanguage()
{
    let currentLanguage = document.getElementById("lang-image");
    spanish = !spanish;

    if (spanish)
    {
        currentLanguage.src = "Assets/Idiomas/UK.png";
        for (let i=0; i<spanishText.length; i++)
        {
            spanishText[i].classList.remove("hidden");
            englishText[i].classList.add("hidden");
        }
    }
    else
    {
        currentLanguage.src = "Assets/Idiomas/España.png";
        for (let i=0; i<spanishText.length; i++)
        {
            spanishText[i].classList.add("hidden");
            englishText[i].classList.remove("hidden");
        }
    }
}