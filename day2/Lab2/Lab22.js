//nhap vao 1 so sau do in ra la so le hay chan
const readline = require("readline-sync");
console.log(
  "This function is check the number is odd or even number. \nPlease input the number you want to check:"
);
let inputNumber = Number(readline.question());
if (Number.isNaN(inputNumber)) {
  console.log("your input value is not number");
} else {
  let remainder = inputNumber % 2;
  if (inputNumber == 0) {
    console.log(`${inputNumber} is not odd also not even`);
  } else if (inputNumber != 0 && remainder != 0) {
    console.log(`${inputNumber} is odd number`);
  } else {
    console.log(`${inputNumber} is even number`);
  }
}
