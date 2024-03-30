String.prototype.toJadenCase = function () {
//     const arr = this.split(' ')
//     const newArr = arr.map( s => s[0].toUpperCase())

// return newArr
    return this.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    //...
  };


  let str = "How can mirrors be real if our eyes aren't real";
  let str2 = 'young jaden: here\'s the deal for every time out you give me, you\'ll give me 15 dollars for therapy when i get older.'
  console.log(str.toJadenCase());
  console.log(str2.toJadenCase());