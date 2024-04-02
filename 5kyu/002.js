
const maxSequence = (arr) => {
    let max = 0
    let current = 0

    for(let i = 0; i < arr.length; i++) {
        current = Math.max(arr[i], current + arr[i])
        max = Math.max(max, current)
    }
    return max

}


console.log(maxSequence([]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([-2,-1,-3,-4,-1,-2,-1,-5,-4]));
console.log(maxSequence([34,-43,13,-19,-27,34,33,15,11,-20,23,39,-33,-39,45,49,-15,-27,1,-35,2,-7,12,-11,-12,-35,-18,-34,7,-28,-4,28,-33,22,45,21,-7,-23,25]));