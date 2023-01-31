// var myObject = {
//   a: 2,
// };

var myObject = {};
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(myObject, "b", {
  value: 2,
  writable: true,
  enumerable: true,
  configurable: true,
});

for (let key in myObject) {
  console.log(key);
}

// myObject.a = 3;
// console.log(myObject.a);

// console.log(Object.getOwnPropertyDescriptor(myObject, "a"));

/* Computed Propertys Names*/

// var prefix = "foo";

// var myObjects = {
//   [prefix + "bar"]: "hello",
//   [prefix + "baz"]: "world",
// };

// var myObjectss = {
//   [Symbol.Something]: "hello world",
//   [Symbol.Something]: "hello worlds",
// };

// console.log(myObjectss);

// //mutable and immutable

// const immutableObject = {};

// Object.defineProperty(immutableObject, "a", {
//   value: 2,
//   writable: false,
// });

// Object.defineProperty(immutableObject, "a", {
//   writable: true,
// });
// // => TypeError: Cannot redefine property: a
// immutableObject.a = 3;
// console.log(immutableObject.a);

const immutableObject1 = {};

Object.defineProperty(immutableObject1, "a", {
  value: 2,
  writable: false,
  configurable: true,
});

Object.defineProperty(immutableObject1, "a", {
  writable: true,
});
immutableObject1.a = 3;
console.log(immutableObject1.a);
var personObj1 = {
  name: 'Alex',
  age: 30
};

// reference type

var personObj1 = {
  name: 'Alex',
  age: 30
};

var person = personObj1;
person.age = 25;

person = {
  name: 'John',
  age: 50
};

var personObj2 = person;

console.log(personObj1);//(1)
console.log(personObj2); //(2)