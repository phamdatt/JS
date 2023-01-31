// let array = [
//   {
//     id: 1,
//     parent: 0,
//   },
//   {
//     id: 2,
//     parent: 1,
//   },
//   {
//     id: 4,
//     parent: 1,
//   },
//   {
//     id: 5,
//     parent: 1,
//   },
// ];

// function arrTree(arr) {
//   let newArr = [];
//   let tmpObj = {
//     id: 0,
//     child: [],
//   };
//   arr.forEach((item, index, currentArray) => {
//     currentArray.forEach((itemCurrent) => {
//       if (item.id == itemCurrent.parent) {
//         let idIndex = newArr.findIndex((item) => {
//           return tmpObj.id === item.id;
//         });
//         if (idIndex >= 0) {
//           newArr[idIndex]?.child?.push({
//             id: itemCurrent.id,
//             child: [],
//           });
//         } else {
//           tmpObj = {
//             id: itemCurrent.parent,
//             child: [
//               {
//                 id: itemCurrent.id,
//                 child: [],
//               },
//             ],
//           };
//           newArr.push(tmpObj);
//         }
//       }
//     });
//   });
//   return newArr;
// }

// console.log(arrTree(array));
const params = [
  {
    key: 'name',
    value: 'John',
  },
  {
    key: 'age',
    value: '30',
  },
];
const arrayToUrlParams = (url, array) => {
  array.forEach((item, index) => {
    if (index === 0) {
      url += `?${item.key}=${item.value}`;
    } else {
      url += `&${item.key}=${item.value}`;
    }
  });
  return url;
}
console.log(arrayToUrlParams('https://example.com', params));