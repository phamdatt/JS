// const path = require("path");
// console.log("src", path.resolve(__dirname, 'src'));

// console.log(__dirname + '\/path.js')

// const path = require("path");

// let paths = path.join(__dirname, "../");
// let pathTest = path.join(__dirname, "./test.js");
// let parentFolder = path.dirname(__dirname);
// let webConfig = path.resolve(__dirname, "src");
// console.log(webConfig);
// console.log(parentFolder);
// console.log(pathTest);
// function stair(n) {
//   for (let i = 0; i < n; i++) {
//     let spaces = "";
//     for (let j = 0; j < n - i - 1; j++) {
//       spaces += " ";
//     }
//     for (let k = 0; k < i + 1; k++) {
//       spaces += "#";
//     }
//     console.log(spaces);
//   }
// }
// stair(6);

// function miniMaxSum(arr) {
//   // Write your code here
//   let result = [];
//   let length = arr.length - 1;
//   if (arr[0] === arr[length]) {
//     result.push(arr[0] * length, arr[0] * length);
//     console.log(result.pop(), result.pop());
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       let resultFilter = arr.filter((item) => {
//         if (arr[0] === arr[arr.length - 1]) {
//           return true;
//         }
//         if (item === arr[i]) {
//           return false;
//         } else {
//           return true;
//         }
//       });
//       result.push(
//         resultFilter.reduce((item, curr) => {
//           if (resultFilter[0] === resultFilter[resultFilter.length - 1]) {
//             return item * resultFilter.length - 1;
//           } else {
//             return item + curr;
//           }
//         })
//       );
//     }
//     let sort = result.sort((a, b) => {
//       return a - b;
//     });
//     console.log(sort.shift(), sort.pop());
//   }
// }
// miniMaxSum([5, 5, 5, 5, 5]);

// let arr = [3,1,2,3];
// console.log(arr.sort((a,b)=>{
//     return a - b;
// }))

// function birthdayCakeCandles(candles) {
//     // Write your code here
//     let result = [];
//     let sortCandles = candles.sort((a,b)=>{
//     return a - b;
//     });
//     console.log(sortCandles)
//     for(let i =0;i<=sortCandles.length;i++){
//         if(sortCandles[i] === sortCandles[i+1]){
//             result.push(sortCandles[i]);
//         }
//     }
//     return result.length
// }
// birthdayCakeCandles([18 ,90 ,90, 13 ,90 ,75 ,90, 8 ,90, 43])
let a =  [18 ,90 ,90, 13 ,90 ,75 ,90, 8 ,90, 43];
console.log( Math.max(...a))