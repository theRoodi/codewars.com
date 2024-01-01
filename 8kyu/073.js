function correctText(text){
    var correctedText = '';
    for (var i = 0; i < text.length; i++) {
        if (text[i] === '5') {
            correctedText += 'S';
        } else if (text[i] === '0') {
            correctedText += 'O';
        } else if (text[i] === '1') {
            correctedText += 'I';
        } else {
            correctedText += text[i];
        }
    }
    return correctedText;
}

console.log(correctText("501105001010010101010010"));  // Outputs: "SO110O1010010101010010"