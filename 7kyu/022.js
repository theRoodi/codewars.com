

const binary = (arr) => {
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        num = num * 2 + arr[i]
    }

    return num
}

const ar = [1, 1, 1, 1]

console.log(binary(ar));