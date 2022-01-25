//

function deepEqual(value1, value2) {
  if (value1 === value2) {
    return true;
  }
}

let value1 = 5;
let value2 = 6;
let value3 = 5;
console.log(`deepEqual: ${deepEqual(value1, value3)}`);
