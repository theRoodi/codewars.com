function multiples(integer, limit) {
    let result = [];
    for (let i = integer; i <= limit; i += integer) {
        result.push(i);
    }
    return result;
}

console.log(multiples(2, 6)); // [2, 4, 6]
console.log(multiples(3, 15)); // [3, 6, 9, 12, 15]
console.log(multiples(5, 25)); // [5, 10, 15, 20, 25]
console.log(multiples(11, 54));
