


function easy(x) {
    return typeof(x) === 'string' ? 'Error' : x * 50 + 6
}

console.log(easy(2));
console.log(easy('asd'));