const word = "E"

function checkWord(a) {
    if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u" || a === "y" || a === "A" || a === "E" || a === "I" || a === "O" || a === "U" || a === "Y" ) {
        return "xmovani";
    }
    else {
        return "tanxmovani"
    };
}

function checkArrayMatch(arr) {
    for(var i = 0;i > arr.length;i++){
        if (arr[i] == arr[i]) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}
checkArrayMatch([])



