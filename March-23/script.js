const countNumber = document.getElementById("number");
const plusButton = document.getElementById("plus");

let counter = 0;
const addUpFunction = () => {
    counter += 1;
    countNumber.textContent = counter;
}
const minusFunction = () => {
    counter -= 1;
    countNumber.textContent = counter;
}
const resetFunction = () => {
    counter = 0;
    countNumber.textContent = counter;
}