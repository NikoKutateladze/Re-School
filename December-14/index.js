var cardsData = [
    {
    title: "BMW",
    description: "The description for BMW",
    category: "car",
    image: "./Assets/bmw.jpg",
    },
    {
    title: "Mercedes",
    description: "The description for Mercedes",
    category: "car",
    image: "./Assets/mercedes.jpg",
    },
    {
    title: "A boy",
    description: "The description for man human",
    category: "human",
    image: "./Assets/boy.jpg",
    },
    {
    title: "A girl",
    description: "The description for girl human",
    category: "human",
    image: "./Assets/girl.jpg",
    },
    {
    title: "A tiger",
    description: "The description for tiger animal",
    category: "animal",
    image: "./Assets/tiger.jpg",
    },
    {
    title: "A giraffe",
    description: "The description for giraffe animal",
    category: "animal",
    image: "./Assets/giraffe.jpg",
    },
    ];
function filterCards() {
    var selectElement = document.getElementById("categorySelect");
    var selectedCategory = selectElement.value;

    console.log(selectedCategory)
    
    var filteredCards = cardsData.filter(function(card) {
        var matchCategory = selectedCategory ==="" || card.category === selectedCategory;
        var aaa =  card.description.includes(searchtext);
    if(matchCategory && aaa) {
        return true;
    }

    return false;
    });
    console.log(selectedCategory, filteredCards);
}

console.log(selectedCategory, searchtext)


