// Mumbling 

// This time no story, no theory. The examples below show you how to write function accum:



function accum(s) { 
    if (!s) {
      return "";
    }
   
    const result = s.split('').map((char, index) => {
      const repeatedChar = char.toUpperCase() + char.toLowerCase().repeat(index);
      return repeatedChar;
    });
   
    return result.join('-'); 
  }
  
  // Примеры использования:
  console.log(accum("abcd"));     // Output: "A-Bb-Ccc-Dddd"
  console.log(accum("RqaEzty"));  // Output: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  console.log(accum("cwAt"));     // Output: "C-Ww-Aaa-Tttt"
  console.log(accum("pidr"));     // Output: "P-Ii-Ddd-Rrrr"