


function calculateRectangleOrSquare(length, width) {
    if (length === width) {
        return length * length;
    } else {
        return 2 * (length + width);
    }
}

console.log(calculateRectangleOrSquare(6, 10)); //Output 32