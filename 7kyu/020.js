// Small enough? - Beginner

function allBelowLimit(array, limit) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > limit) {
            return false;
        }
    }
    return true;
}

console.log(allBelowLimit([1, 2, 3, 4], 5)); // true
console.log(allBelowLimit([1, 2, 5, 6], 5)); // false
console.log(allBelowLimit([10, 20, 30, 40], 50)); // true