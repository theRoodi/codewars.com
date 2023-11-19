// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant). 
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
// Ignore numbers and punctuation.



function isPangram(sentence) { 
    const lowerCaseSentence = sentence.toLowerCase(); 
    const alphabetCounter = {};
     
    for (let i = 0; i < lowerCaseSentence.length; i++) {
      const char = lowerCaseSentence[i]; 
      if (/[a-z]/.test(char)) { 
        alphabetCounter[char] = true;
      }
    } 
    return Object.keys(alphabetCounter).length === 26;
  }
   
  const sentence = "The quick brown fox jumps over the lazy dog";
  console.log(isPangram(sentence)); // Должно вернуть true
  