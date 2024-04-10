const delPhotos = (arr, n) => {
    const result = []
    const counts = {}

    for(const num of arr) {
        counts[num] = (counts[num] || 0) + 1
        if(counts[num] <= n) {
            result.push(num)
        }
    }
    return result
}

console.log(delPhotos([1,2,3,1,2,1,2,3], 2));  //  [1,2,3,1,2,3]
console.log(delPhotos([20,37,20,21], 1));  //   [20,37,21]