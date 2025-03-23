var arr = [
    [1, 2, 3, 4], //4
    [2, 7, 6, 5], //7
    [1, 11, 9, 3], //11
    [5, 6, 2, 0], //6
];
var mxx = 0;
var mnn = Number.MAX_SAFE_INTEGER;
for(var i = 0; i < arr.length; i++) {
    var mx = 0;
    for (var j = 0; j < arr[i].length; j++) {
        mx = Math.max(mx, arr[i][j]);
    }

    if (mx > mxx) {
        mxx = mx;
    }
    if (mx < mnn) {
        mnn = mx;
    }
}

console.log(mxx, mnn)