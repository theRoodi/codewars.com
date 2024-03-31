
const combat = (h, d) => {
    // if ((h - d) <= 0 ) {
    //     return 0
    // } else {
    //     return h - d
    // }
    return (h-d) <= 0 ? 0 : h-d
}

console.log(combat(100, 5));
console.log(combat(92, 8));
console.log(combat(20, 30));