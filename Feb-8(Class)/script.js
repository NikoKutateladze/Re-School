let btn = document.getElementById("btn");
let text = document.querySelector("p");

let count = 0;

function generateNum() {
    count += 1;

    text.textContent = `Generated Random Number on ${count} try was: ${Math.floor(Math.random() * 100) + 1}`;

    if (count > 10) {
        alert("Maximum tries is 10 so please restart");
        count = 0;
        text.textContent = "Click the button to generate a number";
    }
}


