const readline = require("readline-sync");

console.log("input your height (unit: m): ");
let height = readline.question();

console.log("input your weight (unit: kg): ");
let weight = readline.question();

let BMI = weight / (height * height);
let fixBMI = BMI.toFixed(1);
console.log(`your BMI is: ${fixBMI}`);
if(fixBMI  < 18.5){
    console.log("you are underweight! you should eat more.");
}else if(18.5 <= fixBMI && fixBMI <= 24.9) {
    console.log("you are normal weight! good job bro.");
}else if(25 <= fixBMI && fixBMI <= 29.9){
    console.log("you are overweight! you need to go on a diet!");
}else {
    console.log("you are obese! you have to go on a diet ")
}
