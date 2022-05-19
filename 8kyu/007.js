function countSheeps(arrayOfSheep) {
    let count = 0;
    let s = arrayOfSheep.map((sheep) => {
      if(sheep == true) {
        count++
      }
    })
    return count
  }