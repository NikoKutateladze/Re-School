new Promise((resolve, reject) => {
    if (16 > 15) {
        resolve("Success");
    } else {
        reject("Failure");
    }
})
    .then((message) => console.log(message)) // This is the same as resolve message = resolve & .then means if resolve happens do this function
    .catch((reason) => console.log(reason)) // reason is reject