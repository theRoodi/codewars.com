// DNA to RNA Conversion


function dnaToRna(dna) {
    return dna.replace(/T/g, 'U');
    }
    
    console.log(dnaToRna("GCAT")); // Output: "GCAU"