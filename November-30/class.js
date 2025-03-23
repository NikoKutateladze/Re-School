function isPalinDrome(s) {
    var t = '';
    // for(var i = s.length - 1;i >= 0;i--){
    //     t += s[i];
    // }
    // if (t == s) {
    //     console.log(true)
    // }

    // else {
    //     console.log(false)
    // }
    // (t == s)?console.log(true) : console.log(false);

    for (var i = 0; i < s.length / 2; i++) {
        var j = s.length - 1 - i;
        if(s[i] != s[j]) {
            console.log(false);
        }
    }
    console.log(true) ;
    
}   

isPalinDrome("abcba")

//abc cc dad