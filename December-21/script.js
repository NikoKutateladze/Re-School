document.addEventListener("DOMContentLoaded", function () {
    var cardData = [
        {
            title: "A giraffe",
            description: "The description for giraffe",
            category: "Animal",
            image: "./Assets/giraffe.jpg"
        },
        {
            title: "A tiger",
            description: "The description for tiger",
            category: "Animal",
            image: "./Assets/Tiger.jpg"
        },
        {
            title: "A boy",
            description: "The description for boy",
            category: "Human",
            image: "./Assets/boy.jpg"
        },
        {
            title: "A girl",
            description: "The description for girl",
            category: "Human",
            image: "./Assets/girl.jpg"
        },
        {
            title: "BMW",
            description: "The description for BMW",
            category: "Car",
            image: "./Assets/bmw.jpg"
        },
        {
            title: "Mercedes",
            description: "The description for Mercedes",
            category: "Car",
            image: "./Assets/Mercedes.jpg"
        }
    ];

function filteredCards() {
    var categorySelect = document.getElementById("categorySelect");
    var categorySelected = categorySelect.value.toLowerCase();

    var input = document.getElementById("input");
    var inputWritten = input.value.toLowerCase();

    console.log("Selected input: " + inputWritten);
    console.log("Selected category: " + categorySelected);

    // Filter the cards
    var filtCards = cardData.filter(function (card) {
        return (
            (categorySelected === "" || card.category.toLowerCase() === categorySelected) &&
            (inputWritten === "" || card.title.toLowerCase().includes(inputWritten))
        );
    });

    console.log("Filtered cards:", filtCards);

    // Clear previous cards
    var cardContainer = document.getElementById("cardContainer");
    if (!cardContainer) {
        console.error("cardContainer is not found in the DOM");
        return;
    }
    cardContainer.innerHTML = "";

    // Render the filtered cards
    filtCards.forEach(function (card) {
        var div = document.createElement("div");
        div.classList.add("card");

        var image = document.createElement("img");
        image.src = card.image;
        image.alt = card.title;
        console.log(image.src)

        var title = document.createElement("h1");
        title.textContent = card.title;

        var categ = document.createElement("h3");
        categ.textContent = card.category;

        var descr = document.createElement("p");
        descr.textContent = card.description;

        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(categ);
        div.appendChild(descr);

        cardContainer.appendChild(div);
    });
}

// Add event listeners
document.getElementById("input").addEventListener("input", filteredCards);
document.getElementById("categorySelect").addEventListener("change", filteredCards);
});
