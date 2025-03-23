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

// Initialize size with the default selected value
var size = selectSize.value; 

// Flag to track if the user has interacted with the dropdown
var userInteracted = false;

// Listen for changes in the size selection
selectSize.addEventListener("change", function() {
    size = selectSize.value; // Update size whenever the user selects a new value
    userInteracted = true; // Set the flag to true after user interaction
    console.log("Updated Size (after change): ", size); // Log the updated size only after change
});

// Pop-up and close cart functions
function popUp() {
    console.log("Hello");
    cartPanel.style.right = "0px"; // Slide in cart
}

function closeCart() {
    console.log("close");
    cartPanel.style.right = "-550px"; // Slide out cart
}

// Function to add item to cart
function addToCart() {
    num += 1;
    console.log("Item Quantity From User: ", num);
    quantityForCart.textContent = num; // Update the displayed quantity in cart

    // Only log the size if the user has interacted with the dropdown
    if (userInteracted) {
        console.log("Current Size (inside addToCart function): ", size); // Log updated size if changed
    }
}