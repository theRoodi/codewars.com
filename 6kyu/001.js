//Alphabetized

// The alphabetized kata

// Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

// The input is restricted to contain no numerals and only words containing the english alphabet letters.

// Example:

// alphabetized("The Holy Bible") // "BbeehHilloTy"

 

function alphabetized(s) {
    const cleanString = s.replace(/[^a-zA-Z]/g, '');
    const sortedString = cleanString.split('').sort((a, b) => {
      const lowerA = a.toLowerCase();
      const lowerB = b.toLowerCase();
  
      if (lowerA < lowerB) {
        return -1;
      } else if (lowerA > lowerB) {
        return 1;
      } else {
        return s.indexOf(a) - s.indexOf(b);
      }
    }).join('');
  
    return sortedString;
  }
  
  console.log(alphabetized("The Holy Bible")); // Output: "BbeehHilloTy"
  