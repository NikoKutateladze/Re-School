function findMaxWord(a) {
    let start = 0;

    let maxLength = 0;
    let maxWord;
    for (let end = 0; end < a.length; end++) {
        if (a[end] === " " || end === a.length) {
            let len = end - start;
            if (maxLength < len) {
                maxLength = len;
                maxWord = a.slice(start, end);
            }
            start = end + 1;
        }
    }

    console.log(maxLength);
    console.log(maxWord);

}



findMaxWord("Hello world I am from Georgia city Kutaisi")