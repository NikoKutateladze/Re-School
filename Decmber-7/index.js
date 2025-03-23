var numbers = [10, 11, 23, 24, 18 , 13]
var sum = numbers.reduce(function(currentElement , total) { // 11
    return currentElement + total;
}, 0)