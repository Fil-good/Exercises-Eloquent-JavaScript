

// created a new array, without using the reverse method!

function reverseArray(array) {
  new_array =[];
  for(let index = 0; index < array.length; index += 1)
  new_array.push(array[array.length - index]);

  console.log(new_array);


}

// example
given_array = [1,2,3,4,5];
reverseArray(given_array);


// modifies the array
function reverseArrayInPlace(array) {


}
