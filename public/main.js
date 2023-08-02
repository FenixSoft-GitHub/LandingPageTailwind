const htmlElement = document.querySelector("html");
const button = document.querySelectorAll(".buttonDark");

button.forEach(item => item.addEventListener("click", toggleDarkMode));

function toggleDarkMode(){
    htmlElement.classList.toggle("dark");
}

        // const htmlElement = document.querySelector('html')
        // const toggleButton = document.querySelector('#toggle')
        // const toggleButtonSm = document.querySelector('#toggle-sm')

        // toggleButton.addEventListener('click', () => toggleDarkMode())
        // toggleButtonSm.addEventListener('click', () => toggleDarkMode())

        // const toggleDarkMode = () => {
        //     htmlElement.classList.contains('dark')?htmlElement.classList.remove('dark'):htmlElement.classList.add('dark')
        // }
