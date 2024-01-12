function drink(age) {
    if (age < 14) {
        return "drink toddy";
    } else if (age < 18) {
        return "drink coke";
    } else if (age < 21) {
        return "drink beer";
    } else {
        return "drink whisky";
    }
}

console.log(drink(13)); // "drink toddy"
console.log(drink(17)); // "drink coke"
console.log(drink(18)); // "drink beer"
console.log(drink(20)); // "drink beer"
console.log(drink(30)); // "drink whisky"