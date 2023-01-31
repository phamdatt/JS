// function numberGenorator() {
//   var num = 1;
//   function checkNumber() {
//     console.log(num);
//   }
//   num++;
//   return checkNumber;
// }
// const num = numberGenorator();
// num();

// function sum(a, b) {
//   const c = a + b;
//   return function(){
//     console.log(c)
//   }
// }
// sum(1, 2)();
// var result = [];

// for (var i = 0; i < 5; i++) {
//   result[i] = function () {
//     console.log(i);
//   };
// }
// result[0](); // 5, expected 0
// result[1](); // 5, expected 1
// result[2](); // 5, expected 2
// result[3](); // 5, expected 3
// result[4](); // 5, expected 4

function debug(name) {
  return function (str) {
    console.log(`[${name}] ${str}`);
  };
}
const log = debug("Mouse");
log("Error Happend");

