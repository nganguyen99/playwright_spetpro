let intArray = [1, 2, 3, 4, 5];
let max = findMax();
console.log(`${max}`)
function findMax() {
  for (i = intArray[0]; i <= intArray.length; i++) {
    for (j = i; j <= intArray.length; j++) {
      if (i > j) {
        console.log(`${i}`);
        return i;
      } else {
        console.log(`${j}`);
        return j;
      }
    }
  }
}

