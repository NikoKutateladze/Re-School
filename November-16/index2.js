// class Person {
//     #age; // private თვისება

//     constructor(name,age){
//         this.name = name;
//         this.#age = age;
//     }

//     getAge() {
//         return this.#age;
//     }

//     setAge(newAge) {
//         if (newAge > 0) {
//             this.#age = newAge;
//         }
//     }
// }

// let person = new Person("Gio", 25);
// console.log(person.getAge()); //25
// person.setAge(30);
// console.log(person.getAge());

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Loaded");
//         callback();
//     },2000);
// }

// function processData() {
//     console.log("Loading");
// }

// fetchData(processData);

// let myPromise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         let success = true;

//         if (success) {
//             resolve("Operation has been succeed");
//         } else {
//             reject("Operation has been unsucceed");
//         }
//     },2000);
// });

// myPromise.then(result => { // .then() is when promise can be loaded and can be succeed
//     console.log(result);
//     })
//     .catch(error => {  // .catch() is when promise cant be loaded
//         console.log(error); 
//     });

// (resolve) => {
//     setTimeout(()=> {
//         resolve("Data is taken");
//     }, 2000);
// }