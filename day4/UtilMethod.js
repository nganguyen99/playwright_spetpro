 const readline = require("readline-sync")
/*let result = addNumber();
console.log(`add result: ${result}`); */

function getInputNumber(){
    let InputNumber = readline.question("your number: ");
    return Number(InputNumber)
}

const getInputNumber1 = function(){
    let InputNumber = readline.question("your number: ");
    return Number(InputNumber);
}


// Comon JS module
module.exports = {
    oddNumber: getInputNumber,
    getInputNumber1
}