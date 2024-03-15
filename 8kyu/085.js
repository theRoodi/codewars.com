

const mouthSize = (str) => {
    if(str.toLowerCase() === 'alligator') {
        return 'small'
    } else {
        return 'wide'
    }
}


console.log(mouthSize('cat'));
console.log(mouthSize('dog'));
console.log(mouthSize('alligator'));