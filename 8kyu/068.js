



String.prototype.toAlternatingCase = function () {
    let result = "";
    for (let i = 0; i < this.length; i++) {
        let char = this[i];
        if (char >= 'a' && char <= 'z') {
            result += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
};

console.log("hello world".toAlternatingCase()); // Output: "HELLO WORLD"
console.log("HELLO WORLD".toAlternatingCase()); // Output: "hello world"
console.log("hello WORLD".toAlternatingCase()); // Output: "HELLO world"
console.log("HeLLo WoRLD".toAlternatingCase()); // Output: "hEllO wOrld"
console.log("12345".toAlternatingCase()); // Output: "12345"
console.log("1a2b3c4d5e".toAlternatingCase()); // Output: "1A2B3C4D5E"
console.log("String.prototype.toAlternatingCase".toAlternatingCase()); // Output: "sTRING.PROTOTYPE.TOaLTERNATINGcASE"