

var humanYearsCatYearsDogYears = function (humanYears) {
    let cat = 0
    let dog = 0

    if (humanYears === 1) {
        cat = + 15
        dog = + 15
    }

    if (humanYears === 2) {
        cat = + 15 + 9
        dog = + 15 + 9
    }
    if (humanYears >= 3) {
        cat = + 15 + 9 + (4 * (humanYears - 2))
        dog = + 15 + 9 + (5 * (humanYears - 2))
    }

    return [humanYears, cat, dog]
}
 
console.log(humanYearsCatYearsDogYears(2)); // Output: [2,24,24]
console.log(humanYearsCatYearsDogYears(10)); // Output: [10,56,64]
