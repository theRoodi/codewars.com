var countSheep = function (num){
    let name = 'sheep...'
    let rtn = ''
    if (num === 0) {
      return rtn
    }
    for (let i = 1; i <= num; i++) {
      rtn += `${i} ${name}`
    }
    return rtn
  }