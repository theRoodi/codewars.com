
// Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].




const count = (arr) => {
    if (!arr || !Array.isArray(arr) || arr.length <= 1) {
        return []
    }

    let a = 0
    let b = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          a++;
        } else if (arr[i] < 0) {
          b += arr[i];
        }
      }
    return [a, b]

}


console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
