function handCalculation(event) {
    var clickedButtonElement = event.target;
    var clickedButtonSymbol = clickedButtonElement.textContent;

    var number1Element = document.getElementById("number1");
    var number2Element = document.getElementById("number2");

    var number1Value = Number(number1Element.value);
    var number2Value = Number(number2Element.value);

    if (clickedButtonSymbol === "+") {
        var result = number1Value + number2Value;
        var resultContent = `${number1Value} + ${number2Value} = ${result}`;
        document.getElementById("result").textContent = resultContent;
    }

    if (clickedButtonSymbol === "-") {
        var result = number1Value - number2Value;
        var resultContent = `${number1Value} - ${number2Value} = ${result}`;
        document.getElementById("result").textContent = resultContent;
    }

    if (clickedButtonSymbol === "*") {
        var result = number1Value * number2Value;
        var resultContent = `${number1Value} * ${number2Value} = ${result}`;
        document.getElementById("result").textContent = resultContent;
    }

    if (clickedButtonSymbol === "/") {
        var result = number1Value / number2Value;
        var resultContent = `${number1Value} / ${number2Value} = ${result}`;
        document.getElementById("result").textContent = resultContent;
    }

    console.log(clickedButtonSymbol, number1Value, number2Value)
}