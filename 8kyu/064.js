



function setAlarm(employed, vacation) {
    return employed && !vacation;
    }
    
    console.log(setAlarm(true, true)); // Output: false
    console.log(setAlarm(true, false)); // Output: true
    console.log(setAlarm(false, true)); // Output: false
    console.log(setAlarm(false, false)); // Output: false