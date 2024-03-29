// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(num) {
    const digits = String(num).split('').sort((a, b) => b - a);
    return parseInt(digits.join(''), 10);
  }
  
  console.log(descendingOrder(42145)); // 54421
  console.log(descendingOrder(145263)); // 654321
  console.log(descendingOrder(123456789)); // 987654321