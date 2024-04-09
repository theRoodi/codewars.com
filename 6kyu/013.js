const twoSum = (n, t) => {
    const map = new Map()
    for (let i = 0; i < n.length; i++) {
        const c = t - n[i]
        if(map.has(c)) {
            return [map.get(c), i]
        }
        map.set(n[i], i)
    }
}


console.log(twoSum([1, 2, 3], 4));  // Output: [0, 2] or [2, 0]
console.log(twoSum([3, 2, 4], 6));  // Output: [1, 2] or [2, 1]