const startBtnelement = document.getElementById("start-btn");
const stopBtnElement = document.getElementById("stop-btn");

let intervalId;

function updateCounterValue (counter) {
    document.getElementById("counter-display").textContent = counter;
}

function startCounter(){
    clearInterval(intervalId)
    let counter = 0;
    intervalId = setInterval(function () {
        counter = counter + 1;
        updateCounterValue(counter);
    },1000)
    // console.log("started", intervalId)
};
function stopCounter() {
    clearInterval(intervalId)
    updateCounterValue(0)
};

startBtnelement.addEventListener("click", startCounter);
stopBtnElement.addEventListener("click", stopCounter);

