



function solution(str1, str2) {
    return str1.endsWith(str2);
}

console.log(solution('abc', 'bc')); // Output: true
console.log(solution('abc', 'd')); // Output: false