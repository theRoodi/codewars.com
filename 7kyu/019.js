// Find the capitals


function capitalIndices(word) {
    let indices = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
            indices.push(i);
        }
    }
    return indices;
}

console.log(capitalIndices("CodEWaRs")); // [0, 3, 4, 6]
console.log(capitalIndices("hEllo WorlD")); // [0, 3, 7]
console.log(capitalIndices("tHe qUick bRown fOx")); // [0, 3, 6, 9]