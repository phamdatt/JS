let obj = {
  a: {
    c: 2,
  },
  b: 3,
};

let newObj = {
  ...obj,
  a: {
    ...obj.a,
    c: 42,
  },
};

console.log(newObj);
