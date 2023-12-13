


function solution(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }

    return arr.sort((a, b) => a - b);
}

console.log(solution([1, 2, 10, 50, 5])); // Output: [1, 2, 5, 10, 50]