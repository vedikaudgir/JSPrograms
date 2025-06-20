let newHeading = document.getElementById("heading");
let newText = document.getElementById("paragraph");

let headingChanged = 0;
let textChanged = 0;

const headingButton = document.getElementById("changeHeading");
const textButton = document.getElementById("changeText");

headingButton.addEventListener("click", () => {

    headingChanged++;
    newHeading.innerText = "this is new heading " + headingChanged;
});

textButton.addEventListener("click", () => {

    textChanged++;
    newText.innerText = "this is new text " + textChanged;
});