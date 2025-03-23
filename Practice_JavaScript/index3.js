for (let i = 1; i < 11; i++) {
    console.log(i+i);
}
count = 0;
while (count < 5) {
    count ++;
    console.log(count)
}

colors = ['red', 'blue', 'green', 'yellow', 'cyan'];

colors.unshift('pink');
colors.pop(1);

console.log(colors)

const plus = y => y+y;

function jkaa(x) {
    x+x;
}

console.log(plus(2))

console.log(jkaa(2))

function user(names,age) {
    console.log("hello ", names, "you are ", age, "years old")
}

user("Niko",13);

let car = {
    brand:  "Toyota",
    model: "gt-86",
    year: 2015
};

console.log(car.brand);
console.log(car["model"]);
console.log(car.year);
car.color = "White";
console.log(car.color)