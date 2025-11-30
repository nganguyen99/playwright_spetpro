const readline = require("readline-sync");
let arriveTime = readline.question("arriveTime: ");
let isHeOnTime = arriveTime == 8;

/* if (isHeOnTime <= 8) {
    console.log('lets talk');
} else {
    console.log('back to home');
}
 */

let msg = isHeOnTime? "let's talk" : "back to home";
console.log (msg);
