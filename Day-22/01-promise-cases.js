// Creating Promise
// resolve & reject - callback fn

// resolve - fulfilled, reject - rejected

// Case 1
// const drivingTest = new Promise((resolve, reject) => {
//   let age = 20;
//   if (age >= 18) {
//     resolve("Allowed for Driving Test 🚐");
//   } else {
//     reject("Try again after some years 👶🍼");
//   }
// });

// console.log(drivingTest);
// console.log(typeof drivingTest);

// Case 2 - reject - JS throw error
// const drivingTest = new Promise((resolve, reject) => {
//   let age = 14;
//   if (age >= 18) {
//     resolve("Allowed for Driving Test 🚐");
//   } else {
//     reject("Try again after some years 👶🍼");
//   }
// });

// console.log(drivingTest);
// console.log(typeof drivingTest);

// Case 3 - Only want msg
// const drivingTest = new Promise((resolve, reject) => {
//   let age = 20;
//   if (age >= 18) {
//     resolve("Allowed for Driving Test 🚐");
//   } else {
//     reject("Try again after some years 👶🍼");
//   }
// });

// drivingTest.then((msg) => console.log(msg));

// Case 4: + Async code
// const drivingTest = new Promise((resolve, reject) => {
//   let age = 20;
//   if (age >= 18) {
//     setTimeout(() => {
//       resolve("Allowed for Driving Test 🚐");
//     }, 5000);
//   } else {
//     reject("Try again after some years 👶🍼");
//   }
// });

// // Promise will wait - resolve or reject
// console.log("Test Started");
// // console.log(drivingTest); // pending
// drivingTest
// .then((msg) => console.log(msg));

// // Case 5: Reject + .then + .catch
// const drivingTest = new Promise((resolve, reject) => {
//   let age = 14;
//   if (age >= 18) {
//     setTimeout(() => {
//       resolve("Allowed for Driving Test 🚐");
//     }, 5000);
//   } else {
//     reject("Try again after some years 👶🍼");
//   }
// });

// // Promise will wait - resolve or reject
// console.log("Test Started");
// // console.log(drivingTest); // pending
// drivingTest
//   .then((msg) => console.log(msg))
//   .catch((msg) => console.log("Oops: " + msg)); // Fail hence -  Retry logic

// Case 6: Reject + .then chaining
// const drivingTest = new Promise((resolve, reject) => {
//   let age = 20;
//   if (age >= 18) {
//     setTimeout(() => {
//       resolve("Allowed for Driving Test 🚐");
//     }, 5000);
//   } else {
//     reject("Try again after some years 👶🍼");
//   }
// });

// Promise will wait - resolve or reject
// console.log("Test Started");
// // console.log(drivingTest); // pending
// drivingTest
//   .then((msg) => msg + " Super🎊") // Promise object
//   .then((y) => console.log("Cool " + y))

// .then, .catch, .finally returns - Promise object

// Case 7: .then chaining
// const drivingTest = new Promise((resolve, reject) => {
//   let age = 20;
//   if (age >= 18) {
//     setTimeout(() => {
//       resolve("Allowed for Driving Test 🚐");
//     }, 5000);
//   } else {
//     reject("Try again after some years 👶🍼");
//   }
// });

// // // Promise will wait - resolve or reject
// // // console.log("Test Started");
// // // console.log(drivingTest); // pending
// drivingTest
//   .then((msg) => msg + " Super🎊") // Promise object
//   .then((y) => console.log("Cool " + y)) //
//   .then((y1) => console.log(y1 + " Amazing")); //

// Case 9: .then chaining + catch

// const drivingTest = new Promise((resolve, reject) => {
//   let age = 14;
//   if (age >= 18) {
//     setTimeout(() => {
//       resolve("Allowed for Driving Test 🚐");
//     }, 5000);
//   } else {
//     reject("Try again after some years 👶🍼");
//   }
// });

// // Promise will wait - resolve or reject
// // console.log("Test Started");
// // console.log(drivingTest); // pending
// drivingTest
//   .then((msg) => msg + " Super🎊") // skip
//   .then((y) => console.log("Cool " + y)) // skip
//   .then((y1) => console.log(y1 + " Amazing")) // skip
//   .catch((msg) => console.log("Oops:" + msg));

// Case 10: .then chaining + catch + then
// const drivingTest = new Promise((resolve, reject) => {
//   let age = 14;
//   if (age >= 18) {
//     setTimeout(() => {
//       resolve("Allowed for Driving Test 🚐");
//     }, 5000);
//   } else {
//     reject("Try again after some years 👶🍼");
//   }
// });

// drivingTest
//   .then((msg) => msg + " Super🎊") // skip
//   .then((y) => console.log("Cool " + y)) // skip
//   .then((y1) => console.log(y1 + " Amazing")) // skip
//   .catch((msg) => "Oops:" + msg)
//   .then((msg) => console.log("We are back: " + msg));

const drivingTest = new Promise((resolve, reject) => {
  let age = 20;
  if (age >= 18) {
    setTimeout(() => {
      resolve("Allowed for Driving Test 🚐");
    }, 5000);
  } else {
    reject("Try again after some years 👶🍼");
  }
});

drivingTest
  .then((msg) => msg + " Super🎊") // skip
  .then((y) => console.log("Cool " + y)) // skip
  .then((y1) => y1 + " Amazing") // skip
  .catch((msg) => "Oops:" + msg)
  .then((msg) => console.log("We are back: " + msg));
