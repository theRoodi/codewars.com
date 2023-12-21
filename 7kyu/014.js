
// Find the middle element


function gimme(arr) {
    return arr.findIndex(num => num !== Math.min(...arr) && num !== Math.max(...arr));
}

console.log(gimme([2, 3, 1])); //Output 0
console.log(gimme([5, 10, 14])); //Output 1