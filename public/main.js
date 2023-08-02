const htmlElement = document.querySelector("html");
const button = document.querySelectorAll(".buttonDark");

button.forEach(item => item.addEventListener("click", toggleDarkMode));

function toggleDarkMode(){
    htmlElement.classList.toggle("dark");
}