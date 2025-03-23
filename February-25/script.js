const mainInput = document.getElementById("main-input");
const text = document.querySelector("p");
const addFruitButton = document.getElementById("add-fruit-button");
const mainBox = document.getElementById("main-box"); // Select the main-box container

let fruitArray = [];

addFruitButton.addEventListener('click', () => {
    let isAlreadyInTheList = false;

    if (mainInput.value.trim() === '') {
        text.textContent = 'Please enter a fruit.';
        setTimeout(() => {
            text.textContent = '';
        }, 3000);
        return;
    }

    fruitArray.forEach(fruit => {
        if (fruit === mainInput.value) {
            isAlreadyInTheList = true;
        }
    });

    if (isAlreadyInTheList) {
        text.textContent = 'The fruit is already in the list.';
        setTimeout(() => {
            text.textContent = '';
        }, 3000);
        return;
    }

    fruitArray.push(mainInput.value);

    text.textContent = 'Fruit added successfully!';
    setTimeout(() => {
        text.textContent = '';
    }, 3000);

    const divElement = document.createElement('div');
    divElement.classList.add('favorite-fruit-box');
    divElement.innerHTML = `
        <h3 style="margin: 0; font-weight:400;" class="fruit-name">${mainInput.value}</h3>
        <button class="delete-button">X</button>
    `;
    mainBox.appendChild(divElement);

    const deleteButton = divElement.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        const fruitName = divElement.querySelector('.fruit-name').textContent;
        deleteButton.parentElement.remove();
        const index = fruitArray.indexOf(fruitName);
        if(index > -1) {
            fruitArray.splice(index, 1);
        }
        
    });

    console.log(fruitArray);
});
