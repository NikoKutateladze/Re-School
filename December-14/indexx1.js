var cardsData = [
    {
    title: "BMW",
    description: "The description for BMW",
    category: "car",
    image: "./assets/bmw.jpg",
    },
    {
    title: "Mercedes",
    description: "The description for Mercedes",
    category: "car",
    image: "./assets/mercedes.jpg",
    },
    {
    title: "A boy",
    description: "The description for man human",
    category: "human",
    image: "./assets/boy.jpg",
    },
    {
    title: "A girl",
    description: "The description for girl human",
    category: "human",
    image: "./assets/girl.jpg",
    },
    {
    title: "A tiger",
    description: "The description for tiger animal",
    category: "animal",
    image: "./assets/tiger.jpg",
    },
    {
    title: "A giraffe",
    description: "The description for giraffe animal",
    category: "animal",
    image: "./assets/giraffe.jpg",
    },
    ];
var input1 = document.getElementsByClassName("Search-input");

var storage;

function filterCards() {
    cardsData.filter (function () {
        if(cardsData.title === "" || cardsData.title === input1.value) {
            return true;
            storage + cardsData;        
        }
        return false;
    })
}
console.log(storage)