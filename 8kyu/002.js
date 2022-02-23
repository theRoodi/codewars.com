//Square(n) Sum

function squareSum(numbers){
    let num = 0;
    for(let i=0; i< numbers.length;i++) {
      num+=numbers[i]**2
    }
    return num
  }

  console.log(squareSum([0, 3, 4, 5]))