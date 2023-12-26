// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))


function addAndReturnBinary(num1, num2) {
    const sum = num1 + num2;
    const binarySum = sum.toString(2);
    return binarySum;
  }
  
  console.log(addAndReturnBinary(1, 1)); // "10"
  console.log(addAndReturnBinary(5, 9)); // "1110"