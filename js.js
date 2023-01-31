// var numbersArray = [],max =25;
// for(let i = 1;numbersArray.push(i++););
// console.log(numbersArray)

// const id = 10;
// const getId = (...id) => {
//   id = id
//   id(id);
//   function id(id) {
//     console.log(typeof id);
//   }
// };

// getId(id);

// function sum() {
//     var total = 0;
//     var len = arguments.length;
//     for (var i = 0 ; i < len; ++i) {
//       total += arguments[i];
//     }
//      console.log(total);
//   }
  
//   sum(1, 2, 3);
const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder =(a) => a();
higherOrder(firstOrderFunc);