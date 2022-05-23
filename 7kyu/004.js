function findShort(s){
    let arr = s.split(' ')
    let min = Math.min.apply(Math, arr.map(function(str) { return str.length; }));
    return min
  }