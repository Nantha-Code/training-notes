var price = 400;

// // Case 1:
function getPrice() {
  console.log("The old price: ", price); // 400
  //   var price = 500;
  console.log("The new price: ", price); // 400
}

// getPrice();

// // var price = 400;

// // Case 2:
// function getPrice() {
//   console.log("The old price: ", price); // undefined
//   var price = 500;
//   console.log("The new price: ", price); // 500
// }

// getPrice();

var price = 400; // Son

// Lexical scope - Local Guy (Prefer)
// Case 3:
function getPrice() {
  console.log("The old price: ", price);
  var price = 500; // Sachin  Shadowing
  console.log("The new price: ", price);
}

console.log(price); //400

getPrice();

// Lexical scope - Local Guy (Prefer)
// Case 3:
function getPrice() {
  var price = 400;
  console.log("The old price: ", price);
  var price = 500; // Sachin  Shadowing
  console.log("The new price: ", price);
}

var price = 400;
// Case 3:
function getPrice() {
  console.log("The old price: ", price); // error
  let price = 500;
  console.log("The new price: ", price);
}

console.log(price);
