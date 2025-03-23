// Davaleba 1

function checkNum(a) {
    if(a < 0) {
        return `Negative`;
    }
    else if (a > 0) {
        return `Positive`;
    }
    else if (a == 0) {
        return `Zero`;
    }
}  

console.log(checkNum(0));

// Davaleba 2

function passwordsLength(passwords) {
    return passwords.filter(function(passwords){
        return passwords.length >= 8;
    })
}

console.log(passwordsLength(['12345678', 'helloworld123', 'donthackme123', 'password123', '1234', '091238', 'pokasdsd']));

// Davaleba 3

function incrementArrayValues(arr) {
    return arr.map(function(num){
        return num * 3;
    })
}

console.log(incrementArrayValues([4, 6, 10]));

// Davaleba 4

function findMaxMin(array) {
    console.log(Math.max(...array));
    console.log(Math.min(...array));
}

console.log(findMaxMin([1, 2, 3, 4, 5, 6, 7, 8, 9]));

