// let a = 1;
// b = a;
// a = 2;
// console.log(b);

// let object1 = {
//   a: "2",
// }; // adress : #001
// let object2 = object1; // #001

const createCar = (obj) => {
  obj = {
    ...obj,
  };
  obj.name = "Mess";
  return obj;
};

let car = {
  name: "BMW",
};

const newCar = createCar(car);

console.log(car);
console.log(newCar);
