/*let a = 1;
//prefix
let myNumber = ++a;
console.log(myNumber);

//postfix
myNumber = a++;
console.log(myNumber);
console.log(a);*/
let a = 1;
let b = 2;
//thứ tự thực thi: prefix > right operator > assignment > postfix
let c = ++a + b++;
console.log(`a = ${a}, b = ${b}, c = ${c}`);


