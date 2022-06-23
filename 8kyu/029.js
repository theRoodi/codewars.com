function digitize(n) {
    let arr = n.toString().split('')
    let newArr = []
    arr.map(a => newArr.push(parseInt(a)))
    return newArr.reverse()
  }