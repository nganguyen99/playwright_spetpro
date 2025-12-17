const readline = require("readline-sync");
let result = addNumber(1, 2);
console.log(`add bumber:  ${result}`);
function addNumber(num1, num2){
    if(num1 && num2){
        console.log(`num1: ${num1}, num2: ${num2}`);
        return num1 + num2;
    }else{
        throw new Error('Num1 and Num2 must be number!');
        
    }
}