let myNum1 = 1;
let myNum2 = 2;
let result = myNum1 + myNum2;
console.log('total value = ' + result);
console.log(`5/2 = ${5 / 2}`);
//
let roundingNearest = Math.round(9 / 2);
console.log(`Nearest = ${roundingNearest}`)

let roudingFloor = Math.floor(9 / 2);
console.log(`floor = ${roudingFloor}`);

let roudingCelling = Math.ceil(10 / 3);
console.log(`celling = ${roudingCelling}`);

//to fixed number
let anotherResult = 10 / 3;
let MAX_FLOATING_NUMBER = 3;
let toFixNumber = anotherResult.toFixed(MAX_FLOATING_NUMBER);
console.log(`to fix number = ${toFixNumber}`);
