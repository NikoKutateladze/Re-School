// Calculator

const Dis = document.getElementById("display");

function appendToDisplay(input) {
    Dis.value += input;
}

function clearDisplay() {
    Dis.value = "";
}

function calculator() {
    try {
        Dis.value = eval(Dis.value);
    }
    catch(error) {
        Dis.value = "Error";
    }
}