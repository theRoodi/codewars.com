
// Odd or Even?

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).


function sumOfList(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum % 2 === 0 ? "even" : "odd";
  }
   
  console.log(sumOfList([0])); // Output: "even"
  console.log(sumOfList([0, 1, 4])); // Output: "odd"
  console.log(sumOfList([0, -1, -5])); // Output: "even"