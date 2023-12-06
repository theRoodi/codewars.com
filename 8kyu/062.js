
// Powers of 2

// Complete the function that takes a non-negative integer n as input, and returns a list of 
// all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).


function powersOfTwo(n) {
    return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
} 
console.log(powersOfTwo(2));  // Output: [1, 2, 4] 