let text = document.querySelector("p")
let randomNum = Math.floor(Math.random() * 100) + 1;
let btn = document.getElementById("btn");
btn.addEventListener("click" ,() => {
    text.textContent = Math.floor(Math.random() * 100) + 1;
})
