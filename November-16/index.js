var students = [
    { 
        name: "Anna", 
        grades: {
            math: [80, 90, 85],
            science: [81, 91, 86],
            history: [76, 86, 81]
        }
    },
    { 
        name: "Ben", 
        grades: {
            math: [75, 85, 95],
            science: [82],
            history: [79]
        }
    },
    { 
        name: "Cara", 
        grades: {
            math: [92, 88, 84],
            science: [91],
            history: [87]
        }
    }
];


function getAverage(grades) {
    var total = 0;
    for (var i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    return total / grades.length;
    
}

// მაგალითი : 



console.log("Anna's math average:", getAverage(students[0].grades.math));
console.log("Anna's science average:", getAverage(students[0].grades.science));
console.log("Anna's history average:", getAverage(students[0].grades.history));