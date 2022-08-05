//Find the position!


function position(letter){
    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    for(let i = 0; i <= abc.length; i++){
      if(abc[i] === letter) {
        return `Position of alphabet: ${i + 1}`
      } 
    }
  }