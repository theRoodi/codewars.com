const sortt = (arr) => {
    return arr.reduce((a, b) => a.concat(b), []).sort((a,b) => a - b)
}

const arrr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
console.log(sortt(arrr));