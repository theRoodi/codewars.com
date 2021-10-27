//Vowel Count

function getCount(str) {
    var vowelsCount = 0;
    const array = ['a','e','i','o','u'];
    
    for(let i = 0; i < str.length; i++) {
      for(let j = 0; j < array.length; j++){
        if(str[i] === array[j]) {
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }