/* I am a boss at wine store
- customer < 18 tuôi -> dont sale
- customer from 18 to 55 -> unlimited
- customer > 55 -> two bottle */


const readline = require("readline-sync");
console.log("waiter: how old are you?");
let customerAge = readline.question(`input your age: `);
console.log(`Customer: I'm ${customerAge} years old`);

if (customerAge < 18) {
    console.log("waiter: you are very young, we can't sale for you!");
} else if (18 <= customerAge < 56) {  //18 <= customerAge && customerAge < 56
    console.log("waiter: how many do you want to buy?");
    console.log("customer: how many I can buy?");
    console.log("waiter: unlimited!");
    console.log("customer: Ok! I want to buy 10, thanks!")

} else {
    console.log("customer: I want to buy for 10");
    console.log("waiter: oh sorry, you can buy 2 only!");
    console.log("customer: why?");
    console.log("waiter: because we have the rule, if your age more than 55, you can buy 2 only! sorry for this convinient.");

}