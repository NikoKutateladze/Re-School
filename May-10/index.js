const fruits = ["apple", "banana"];
const vegetables = ["carrot", "tomato"];

let merge = [...fruits, ...vegetables];
console.log(merge);





const numbers = [5, 10, 15];
function sum(arr) {
    console.log(arr.reduce((acc, next) => acc + next));
}

sum(numbers);




const originalArray = [1, 2, 3];
let copyArray = [...originalArray];

copyArray.push(4);
copyArray.push(5);
copyArray.push(6);
console.log(copyArray);

const person = { name: "Anna", age: 25 };
const job = { title: "Developer", company: "Tech Ltd" };

const personJob = {...person, ...job};
console.log(personJob);

const user = { name: "Giorgi", age: 30 };
function updateUser(job, newAge) {
    let user1 = {...user};
    user1.name = "Niko"
    user1.age = newAge;
    user1.job = job;
    
    console.log(user1);
}
updateUser("Front-End-Developer", 14);


const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];

const arr4 = [...arr1, ...arr2, ...arr3];

let unique = [];
arr4.forEach((e) => {
    if (!unique.includes(e)) {
        unique.push(e);
    }
})
console.log(unique);

const colors = ["red", "green", "blue", "yellow"];
const colors1 = [...colors.filter((f) => {
    return f !== "blue";    
})];

console.log(colors1);