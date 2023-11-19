// Write Number in Expanded Form

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.



function expandedForm(number) { 
    const numStr = number.toString(); 
    const expandedForm = [];
     
    for (let i = 0; i < numStr.length; i++) { 
      if (numStr[i] !== '0') { 
        expandedForm.push(Number(numStr[i]) * 10 ** (numStr.length - i - 1));
      }
    } 
    return expandedForm.join(' + ');
  }
   
  console.log(expandedForm(12));    // Должно вернуть '10 + 2' 
  console.log(expandedForm(42));    // Должно вернуть '40 + 2'
  console.log(expandedForm(70304)); // Должно вернуть '70000 + 300 + 4'
  






