//Calculate average


function find_average(array) {
    let sum = 0; 
    array.map(a => sum += a)
    
    return array.length === 0 ? 0 : sum/array.length
  }