const readline = require("readline-sync");
if (suggestion = 1) {
    console.log("you should eat more.")
} else if (suggestion = 2) {
    console.log("good job bro.");
} else if (suggestion = 3) {
    console.log("you need to go on a diet!")
} else {
    console.log("you have to go on a diet")
};
function suggestion() {
    console.log("input your height (unit: m): ");
    let height = readline.question();

    console.log("input your weight (unit: kg): ");
    let weight = readline.question();
if(isNaN(height)){
    console.log("your height that you input is not number, please input number")
}else if (isNaN(weight)){
    console.log("your weight that you input is not number, please input number")
}else {
    let BMI = weight / (height * height);
    let fixBMI = BMI.toFixed(1);
    console.log(`your BMI is: ${fixBMI}`);
    if (fixBMI < 18.5) {
        console.log("you are underweight!");
        return 1;
    } else if (18.5 <= fixBMI && fixBMI <= 24.9) {
        console.log("you are normal weight!");
        return 2;
    } else if (25 <= fixBMI && fixBMI <= 29.9) {
        console.log("you are overweight!");
        return 3;
    } else {
        console.log("you are obese!");
        return 4;
    }
}}

