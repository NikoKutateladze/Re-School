const displayInput = document.getElementById("input-display");

function appendToDisplay(input) {
    displayInput.value += input
}
function calculator() {
    try {
        displayInput.value = eval(displayInput.value);
    }
    catch(error) {
        displayInput.value = "Error"
    }
}
function clearDisplay() {
    displayInput.value = "";
}