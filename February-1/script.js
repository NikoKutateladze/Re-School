let displayText = document.getElementById("display");

let counter = 0;



function increaseFunction() {
    const count = setInterval(function() {
    counter =(counter + 1) % 11;
    console.log(counter)
    displayText.textContent = counter;
}, 1000);
}
