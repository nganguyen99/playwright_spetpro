const readline = require("readline-sync");
let returnSugggeston = suggestion();
if (returnSugggeston == 5) {
  console.log("your height that you input is not number, please input number");
} else if (returnSugggeston == 6) {
  console.log("your weight that you input is not number, please input number");
} else if (returnSugggeston == 1) {
  console.log("you should eat more.");
} else if (returnSugggeston == 2) {
  console.log("good job bro.");
} else if (returnSugggeston == 3) {
  console.log("you need to go on a diet!");
} else {
  console.log("you have to go on a diet");
}
function suggestion() {
  console.log("input your height (unit: m): ");
  let height = Number(readline.question());

  console.log("input your weight (unit: kg): ");
  let weight = Number(readline.question());

  if (Number.isNaN(height)) {
    return 5;
  } else if (isNaN(weight)) {
    return 6;
  } else {
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
  }
}
