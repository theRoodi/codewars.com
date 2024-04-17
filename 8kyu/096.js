const traficLight = (str) => {
    if(str === 'green') {
        return 'yellow'
    } else if (str === 'yellow') {
        return 'red'
    } else {
        return 'green'
    }
}