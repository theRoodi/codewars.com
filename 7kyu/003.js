//Regex validate PIN code

const validatePIN = (pin) => {
    const reg = /^(\d{4}|\d{6})$/;
    return reg.test(pin)
}