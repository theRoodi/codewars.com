const print = (s) => {
    let errorCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] < 'a' || s[i] > 'm') {
            errorCount++;
        }
    }
    return errorCount + '/' + s.length;
}


console.log(print("aaabbbbhaijjjm"));
console.log(print("aaaxbbbbyyhwawiwjjjwwm"))
console.log(print("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))