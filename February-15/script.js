console.log("start");

const getRandomNumber = async () => {
    return Math.floor(Math.random() * 100) + 1;
}

async function getRandomNumber2() {
    return Math.floor(Math.random() * 100) + 1;
}
getRandomNumber2().then((value) => console.log(value));

getRandomNumber().then((value) => console.log(value));

console.log("end");