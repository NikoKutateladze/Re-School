
function handleCalculateDateTime() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var time = `${hours}:${minutes}:${seconds}`;

    document.getElementById("time").innerText = time;
}   

document.addEventListener("DOMContentLoaded", function () {
    setInterval(handleCalculateDateTime, 1000);
    handleCalculateDateTime();
});

