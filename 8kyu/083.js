function removeZero(num) {
    var strNum = num.toString();
    var last = strNum.length - 1;
    while (strNum[last] === '0') {
        last--;
    }
    return strNum !== '0' ? parseInt(strNum.substring(0, last + 1)) : 0
}
console.log(removeZero(0));