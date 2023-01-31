// function sum(a, b, callback) {
//   let result = a + b;
//   callback(result);
// }

// sum(1, 2, (data) => {
//   console.log(data);
// });

//promise
// const currentPromise = new Promise((resolve, reject) => {
//   let condition = true;
//   if (condition) {
//     setTimeout(() => {
//       resolve("success");
//     }, 3000);
//   } else {
//     reject("Error");
//   }
// });

// currentPromise.then((data) => {
//   console.log(data);
// });

import fetch from "node-fetch";

function httpGetAsync(url, resolve) {
  fetch(url).then((resp) => {
    resolve(resp);
  });
}

const currentPromise = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

currentPromise.then((resp) => {
  console.log(resp.url);
  document.getElementById("img_1").setAttribute("src", resp.url);
});
