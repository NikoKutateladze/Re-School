const prices = [100, 200, 300];

const tenPercent = prices.map((x) => x += (x * 10) / 100);
console.log(tenPercent.reduce((acc, next) => acc + next));

const data = [20, 99, 150, 80, 105];

console.log(data.find((y) => y > 100));

const words = ["hi", "hello", "javascript"];
let wrds = [];
words.map((g) => wrds.push(g.length))
console.log(wrds.reduce((acc, next) => acc + next));


const nums = [1, 2, 2, 3, 4, 4, 5];

let unique = [];

nums.forEach(it => {
    if(unique.includes(it)) {
        return false
    } else {
        unique.push(it)
    }
})
console.log(unique.reduce((acc, next) => acc + next));


const products =[
    { name: "Book",price: 15, inStock: true},
    { name: "Pen", price: 5, inStock: false},
    { name: "NoteBook", price: 10, inStock: true},
];

let stock = products.filter(item => item.inStock == true);
console.log(stock.reduce((acc, next) => acc.price + next.price));


const scores = [88, 42, 95, 63, 77];
let op = scores.sort((a, b) => b - a);
console.log(op)

