const short = (str) => {
    return str.replace(/[aeiou]/gi, '')
}

console.log(short('hello'));