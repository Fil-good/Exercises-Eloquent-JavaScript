// a list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on..


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

console.log(list);
