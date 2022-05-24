function positiveSum(arr) {
    let sum = 0
    arr.map(num => {
      if (num > 0) {
        sum+=num
      }
    })
    return sum
  }