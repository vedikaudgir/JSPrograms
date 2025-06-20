const container = document.getElementById("container");
const addButton = document.getElementById("addBox");
const deleteButton = document.getElementById("deleteBox");

let count = 0;

addButton.addEventListener("click", () => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerText = `Box #${++count}`;
    container.appendChild(box);
});

deleteButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    if (boxes.length > 0) {
        boxes[boxes.length - 1].remove();
        count--;
    }
})