//All Star Code Challenge #18

function strCount(str, letter){  
    let array = str.split('')
    let count = 0;
    array.map(a => a === letter ? count++ : count)
    return count
  }