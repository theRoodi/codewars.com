//Grasshopper - Grade book

function getGrade (s1, s2, s3) {
    const avr = (s1 + s2 + s3) / 3
    if(avr <= 100 & avr >= 90){
      return 'A'
    } else if(avr < 90 & avr >= 80) {
      return 'B'
    } else if(avr < 80 & avr >= 70) {
      return 'C'
    } else if(avr < 70 & avr >= 60) {
      return 'D'
    } else if(avr < 60 & avr >= 0) {
      return 'F'
    }
  }