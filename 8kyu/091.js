const deletes = (a) => {
    let result = []
    for(let i = 0; i < a.length; i++) {
        if(result.indexOf(a[i])  === -1) {
            result.push(a[i])
        }
    }
    return result
}

console.log(deletes([1,1,2]));