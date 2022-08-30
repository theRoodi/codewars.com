//Name on billboard


function billboard(name, price = 30){
    let a = name.split('')
    let s = 0;
    a.map(i => s = s + price)
    return s
  } 