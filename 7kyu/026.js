const factorial = (n) => {
    if (n < 0 || n > 12) {
        throw new RangeError("Input must be between 0 and 12");
      }
    
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
    
      return result;
}


console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(15));