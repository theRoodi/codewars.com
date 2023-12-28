// Write a function that returns both the minimum and maximum number of the given list/array.



function nums(arr){
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return [min, max]
}


console.log(nums([2,3,8,6,4,55,99])); // [2,99]