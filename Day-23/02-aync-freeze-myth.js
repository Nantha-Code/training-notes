// function run() {
//   let P1 = Promise.resolve(2);

//   P1.then((x) => console.log(x));
// }

// run();

// async function run1() {
//   let x = await Promise.resolve(2);
//   console.log(x);
// }

// console.log(1);
// run1();
// console.log(3);

// Top level - await

async function run2() {
  console.log(1);
  let x = await Promise.resolve(2);
  console.log(x);
  console.log(3);
}

console.log(10);
run2();
console.log(15);
