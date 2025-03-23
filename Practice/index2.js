var anything = [
    {   
        image : "./mesh-gradient(4).png",
        itemName: "Item",
        description: "description for item",
        priceTag: "9.99$",
        sizeQuantity: "5 sizes"
    },
    

]


var icon = document.getElementsByClassName("icon");
var cartPanel = document.getElementById("cartPanel");
var addToCartButton = document.getElementById("buyBtn");
var item = document.getElementById("box");
var selectSize = document.getElementById("size");
var num = 0;
var quantityForCart = document.getElementById("quantity");
var parentElmnt = addToCartButton.parentElement.parentElement;
var childElmnt = parentElmnt.children;
var sizeElmnt = childElmnt[5].children[1];
size = selectSize.value ;


function Iterate() {
    const children = parentElmnt.children; // Define children here
    for (let child of children) {
        console.log(child.textContent.trim()); // Log the text content of each child
    }
}




function popUp() {
    console.log("Hello");
    cartPanel.style.right = "0px";
}
function closeCart() {
    console.log("close");
    cartPanel.style.right = "-550px";
}
function addToCart() {
    num += 1;
    console.log("Item Quantity From User: ", num);
    quantityForCart.textContent = num;

    
}


var subj;
var sze;
var size = selectSize.value;
selectSize.addEventListener("change", () => {
    size = selectSize.value;
    // console.log(size)
    subj = childElmnt[1].innerText;
    sze = size;
    console.log("Subject: " ,subj);
    console.log("Size: " , sze);
    
})