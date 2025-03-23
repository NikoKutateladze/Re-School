const startButton = document.getElementById('start-button');
const checkButton = document.getElementById('check-number');
const startAgainBtn = document.getElementById('start-again');
const myNumber = document.getElementById('my-number');
const randomNum = document.getElementById('random-number');
const attemptText = document.getElementById('attempts');
const Header2 = document.querySelector('h1');
const mainContainer = document.getElementById('container');
const youLostTxt = document.getElementById('you-lost-text');
const allButtons = document.querySelectorAll('button');


allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        let spanOverlay = document.createElement('span');
        spanOverlay.style.cssText = `
            position: absolute;
            left: 50%;
            top: 50%;
            height: 450px;
            width: 450px;
            transform: translate(-50%, -50%);
            background-color: #fdcf178b; 
            z-index: -1;   
            border-radius: 50%;
            transition: 1s;
            opacity: 0;
            animation: button_click .5s ease-in-out;
        `;

        event.target.appendChild(spanOverlay);

        spanOverlay.addEventListener('animationend', (e)=> {
            e.target.remove()
        })
    });
});


let randomNumber = Math.floor(Math.random() * 100) + 1;
amountOfAttempts = 0;

startButton.addEventListener("click", function () {
    amountOfAttempts += 1;
    checkButton.classList.remove('hidden');
    myNumber.classList.remove('hidden');
    attemptText.classList.remove('hidden');
    Header2.classList.remove('hidden');
    randomNum.classList.remove('hidden');
    mainContainer.style.display = "flex";
    startButton.style.display = 'none';
})
startAgainBtn.addEventListener("click", () => {
    amountOfAttempts = 0;
    attemptText.textContent = `Attempt: ${amountOfAttempts}`;
    attemptText.classList.remove('hidden');
    checkButton.classList.remove('hidden');
    Header2.classList.remove('hidden');
    startAgainBtn.classList.add('hidden');
    myNumber.classList.remove('hidden');
    startButton.classList.add('hidden');
    youLostTxt.classList.add('hidden');
    myNumber.value = '';
    randomNum.classList.remove('hidden');
    randomNum.textContent = 'Click the Button to Generate a Random Number 1-100';
    randomNumber = Math.floor(Math.random() * 100) + 1;
})
checkButton.addEventListener("click", () => {
    
    let myNumberValue = myNumber.value;
    attemptText.textContent = `Attempt: ${amountOfAttempts}`;
    if (randomNumber == Number(myNumberValue)) {
        randomNum.textContent = `You Guessed the Random Number on ${amountOfAttempts} Attempt`;
        attemptText.classList.add('hidden');
        startAgainBtn.classList.remove('hidden');
        checkButton.classList.add('hidden');
        amountOfAttempts += 1;
    }
    if (randomNumber != Number(myNumberValue) && Number(myNumberValue) > randomNumber) {
        randomNum.textContent = 'Try Again. Lower'
        amountOfAttempts += 1;

    }

    if (randomNumber != Number(myNumberValue) && Number(myNumberValue) < randomNumber){
        randomNum.textContent = 'Try Again. Higher';
        amountOfAttempts += 1;
    }
    if (amountOfAttempts > 7) {
        checkButton.classList.add('hidden');
        startAgainBtn.classList.add('hidden');
        myNumber.classList.add('hidden');
        Header2.classList.add('hidden');
        attemptText.classList.add('hidden');
        startAgainBtn.classList.remove('hidden');
        youLostTxt.classList.remove('hidden');
        randomNum.classList.add('hidden')
        amountOfAttempts += 1;
    }
    if (Number(myNumberValue) == 0) {
        randomNum.textContent = 'Choose between 1-100 Not 0';
    }
    if (Number(myNumberValue) > 100) {
        randomNum.textContent = 'Choose between 1-100 Not over 100'
    }
})