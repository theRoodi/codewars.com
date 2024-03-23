

const floor = (n) => {
    if ( n <= 0 ) {
        return n
      } else if (n >= 13) {
        return n - 2
      } else if (n >= 1){
        return n - 1
      }
}

 console.log(floor(15));
 console.log(floor(5));
 console.log(floor(1));
 console.log(floor(-1));