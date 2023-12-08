
// Testing 1-2-3

function numberLines(lines) {
    return lines.map((line, index) => `${index + 1}: ${line}`)
  }
  
  // Example usage:
  console.log(numberLines([])); // Output: ""
  console.log(numberLines(["a", "b", "c"])); // Output: "1: a, 2: b, 3: c"