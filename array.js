// const arrCar = ["BMW", "MESCEDES", "HONDA"];
// console.log(arrCar.pop());
// console.log(arrCar);

// const arrFruits = ["Orange", "Banana", "Straw"];
// console.log(arrFruits.shift());

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// const numbers = [1, 2, 3];
// const numersCoppy = [...numbers];

// console.log(numersCoppy === numbers);
// console.log(numersCoppy);

// let numbers1 = [1, 2, 3];
// let numbersCoppy1 = [];
// let i = -1;
// while (++i < numbers1.length) {
//   numbersCoppy1[i] = numbers1[i];
// }

// console.log(numbersCoppy1);

// const arr = ["Banana", "Orange", "Apple", "Mango"];
// arr.splice(1, 2, "Lemon", "Kiwi");
// console.log(arr);

let arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  var result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zeros += 1;
    }
   
  }
  var FractionOfPostive =  parseFloat(positive / arr.length);
  var FractionOfNegative = parseFloat(negative / arr.length);
  var FractionOfZero = parseFloat(zeros / arr.length);
  
  result.push(FractionOfPostive,FractionOfNegative,FractionOfZero)
  return result;
}
console.log(plusMinus(arr));
