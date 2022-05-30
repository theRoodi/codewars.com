function removeChar(str){
    let newstr = str.split('')
    let str2 = []
    for(let i = 1; i < str.length-1; i++) {
      str2.push(str[i])
    }
     return str2.join('')
   };
   
   
   