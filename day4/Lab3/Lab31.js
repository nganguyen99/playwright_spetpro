let intArray = [1, 2, 3, 4, 5];
let oddNum = 0;
let evenNum = 0;
console.log("the number has exist in array list is: ");
for (i = intArray[0]; i <= intArray.length; i++) {
    console.log(`${i}`)
  if (i % 2) {
    oddNum++;
  } else {
    evenNum++;
  }
}
console.log(`amount of odd number is: ${oddNum}`);
console.log(`amount of even number is: ${evenNum}`);
