

const twiceAsOld = (dad, son) => {
    let ageDifference = dad - (2 * son);
    return Math.abs(ageDifference);
}

console.log(twiceAsOld(55, 30));