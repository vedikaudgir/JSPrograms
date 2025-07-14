const colorButton = document.getElementById("boxButton");
const colorBox = document.getElementById("coloredBox");
const buttonBox = document.getElementById("boxButton");

colorButton.addEventListener("click", () => {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
});

colorButton.addEventListener("click", () => {
    const randomColor = getRandomColor();
    buttonBox.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}