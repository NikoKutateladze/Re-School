function DalogeMausisShetana(event) {
    console.log("mouse entered" , event.target);
}

function DalogeMausisGatana(event) {
    console.log("mouse leaved", event.target);
}

function washaleSiidan(event) {
    var liElement = event.target;
    var UlElement = document.getElementById("todo-list");
    console.log("washale: ", liElement);

    UlElement.removeChild(liElement);
}


function addTodo() {
    var InputElement = document.getElementById("text-input");
    var InputText = InputElement.value;
    var LiElement = document.createElement("li");
    LiElement.textContent = InputText;
    var UlElement = document.getElementById("todo-list");
    UlElement.appendChild(LiElement);
    InputElement.value = "";
    InputElement.focus();

    btnElement = document.getElementById("dlt-btn");

    LiElement.addEventListener("mouseenter" , DalogeMausisShetana);
    LiElement.addEventListener("mouseleave" , DalogeMausisGatana);
    LiElement.addEventListener("click", washaleSiidan)

}
