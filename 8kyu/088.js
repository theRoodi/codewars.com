

const fake = (n) => {
    // const arr = n.split('')
    // const newArr = arr.map(i => i < 5 ? 0 : 1)
    // // console.log(arr);
    // // console.log(newArr);
    // return newArr.join('')
    return n.split('').map(i => i < 5 ? '0' : '1').join('')
}


// console.log(fake('45385593107843568'));
// console.log(fake('509321967506747'));
console.log(fake('366058562030849490134388085'));
