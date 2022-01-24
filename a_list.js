// a list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on..


// theory
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
// console.log(list);


// write a function arrayToList, when given argument [1,2,3]

function arrayToList(array) {
  let list = null;
  for( let i = array.length-1; i>=0; i--)
    list = {value: array[i], rest: list};
  // console.log(list);
  return list;
}

let array_ex = [1,2,3];
console.log(arrayToList(array_ex));
