


function longest(s1, s2) {
    let combined = s1 + s2;
    let uniqueChars = new Set(combined);
    return [...uniqueChars].sort().join("");
    }
    
    let a = "xyaabbbccccdefww";
    let b = "xxxxyyyyabklmopq";
    console.log(longest(a, b)); // Output: "abcdefklmopqwxy"
    
    let a2 = "abcdefghijklmnopqrstuvwxyz";
    console.log(longest(a2, a2)); // Output: "abcdefghijklmnopqrstuvwxyz"