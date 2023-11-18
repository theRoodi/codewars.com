 
function lookAndSaySequence(start, n) {
    if (n <= 0) {
      return "Invalid input for n";
    }
  
    let currentElement = start;
  
    for (let i = 1; i < n; i++) {
      currentElement = generateNextElement(currentElement);
    }
  
    return currentElement;
  } 
  function generateNextElement(str) {
    let result = "";
    let count = 1;
  
    for(let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        result += count + str[i];
        count = 1;
      }
    }
  
    return result;
  }
  
  // Пример использования:
  console.log(lookAndSaySequence("1", 1));   // Вывод: "1"
  console.log(lookAndSaySequence("1", 3));   // Вывод: "21"
  console.log(lookAndSaySequence("1", 5));   // Вывод: "111221"
  console.log(lookAndSaySequence("22", 10)); // Вывод: "22"
  console.log(lookAndSaySequence("14", 2));  // Вывод: "1114"
  