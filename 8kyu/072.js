// Create a method to see whether the string is ALL CAPS.



// function caps(str) {
//     const newStr = str.toUpperCase() 
//     return str === newStr 
// }

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
  }

// console.log(caps('hello I AM DONALD'));
// console.log(caps('HELLO I AM DONALD'));

console.log("hello I AM DONALD".isUpperCase()); // false
console.log("HELLO I AM DONALD".isUpperCase()); // true