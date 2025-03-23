// დავალება 1
var scores = [60, 75, 80, 90, 65];
// გამოიყენეთ map, რომ ახალი მასივი შექმნათ თითოეულს დამატებული 5
var increasedScores = scores.map(function (nums) {
    return nums + 5;
});
console.log(increasedScores); // [65, 80, 85, 95, 70]
//დავალება 2
var studentsScores = [65, 80, 55, 92, 73, 60];
// გამოიყენეთ filter, რომ დარჩეს მხოლოდ ისინი, რომელთა ქულაც 70-ზე მეტი იყო
var passedStudents = studentsScores.filter(function (num) {
    if (num > 70) {
        return true;
    }
    return false
});
console.log(passedStudents); // [80, 92, 73]
//დავალება 3
var colors = [12, 7, 18, 20, 5, 9, 13];
// გამოიყენეთ filter და map, რომ შევქმნათ ახალი მასივი. უნდა გაიფილტროს ის ფერები რომელიც მეტია 10-ზე და თითოეულ მათგანს დაემატოს 5
var increasedColors = colors.filter(function (x) {
    if (x > 10) {
        return true;
    }
    return false;
}).map(function (y) {
    return y + 5
});
console.log(increasedColors); // [17, 23, 25, 18]
//დავალება 4
var numbers = [1, 2, 3, 4, 5];
// გამოიყენეთ reduce, რომ გავიგოთ რიცხვების ჯამი
var total = numbers.reduce(function (total, currentElement) {
    return total + currentElement
});
console.log(total); // 15
//დავალება 5
var grades = [20, 10, 15, 5, 50];
// გამოიყენეთ reduce, რომ მიიღოთ საშუალო ქულა
var averageGrade =
grades.reduce(function (total , currentElement ) {
    return total + currentElement ;
}) / grades.length;
console.log(averageGrade); // 20