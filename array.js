/*
let array = [];
let count = 0;
let maxCount;
initLoop();

function initLoop() {
  console.log("initLoop");
  //The code below ensures that the incrementing numbers stop at 10
  maxCount = 22;
  //This method below is a callback function
  loop();
}
*/

let count = 0;
let arr = [];

function addToArray() {
  arr.push(count);
  console.log(arr);

  if (count < 9) {
    setTimeout(addToArray, 1000);
  }

  count++;
}

addToArray();
let counter;
for (counter = 0; counter < 10; counter++) {
  console.log(counter);
}
console.log(`after a loop, counter is ${counter}`);
