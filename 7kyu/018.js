
// Complementary DNA

function DNAcomplement(str){
    return str.split('').map(function(x){
        switch(x){
            case 'A': return 'T';
            case 'T': return 'A';
            case 'C': return 'G';
            case 'G': return 'C';
        }
    }).join('');
}


console.log(DNAcomplement("ATTGC"));  // Outputs: "TAACG"
console.log(DNAcomplement("GTAT"));  // Outputs: "CATA"