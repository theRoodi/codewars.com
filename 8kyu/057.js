// Removing Elements

// Take an array and remove every second element from the array. 
// Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]




function removeElements(arr) {
    return arr.filter((element, index) => index % 2 === 0);

}

console.log(removeElements(["Keep", "Remove", "Keep", "Remove", "Keep"]));