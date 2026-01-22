let P1 = Promise.resolve(2);
let P2 = Promise.resolve(10);
let P3 = Promise.resolve(3);

// P1.then((x) => console.log(x));
// P2.then((x) => console.log(x));
// P3.then((x) => console.log(x));

// Promise.all([P1, P2, P3])

//   .then((result) => console.log(result));

// // Case 1:
function case1() {
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  }); // 4s

  P4.then((x1) => console.log(x1));
  P5.then((x2) => console.log(x2));
  P6.then((x3) => console.log(x3));

  Promise.all([P4, P5, P6]).then((result) => console.log(result));
}

// Any one fail - all fails
function case2() {
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  });

  Promise.all([P4, P5, P6])
    .then((result) => console.log(result))
    .catch((msg) => console.log("Oops: " + msg));
}

// Which resolves first that wins - race
function case3() {
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  }); // 4s

  Promise.race([P4, P5, P6]).then((result) => console.log(result));
}

// case3();

// Which resolves first that wins - race
function case4() {
  console.log("Started");
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(3);
    }, 4000);
  }); // 4s

  Promise.race([P4, P5, P6]).then((result) => console.log(result));
}

// case4();

// Which resolves first that wins - race
// When first on reject - Promise.race - error
function case5() {
  console.log("Started");
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  }); // 4s

  Promise.race([P4, P5, P6]).then((result) => console.log(result));
}

// case5();

// When all resolve - any = race
function case6() {
  console.log("Started");
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  }); // 4s

  Promise.any([P4, P5, P6]).then((result) => console.log(result));
}

// case6();

// any one resolves - then its the fullfilled value
// function case7() {
//   console.log("Started");
//   let P4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 2000);
//   }); // 2s

//   let P5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(8);
//     }, 1000);
//   }); // 1s

//   let P6 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 4000);
//   }); // 4s

//   Promise.any([P4, P5, P6]).then((result) => console.log(result));
// }

// case7();

// index.html:1 Uncaught (in promise) AggregateError: All promises were rejected
function case8() {
  console.log("Started");
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(3);
    }, 4000);
  }); // 4s

  Promise.any([P4, P5, P6]).then((result) => console.log(result));
}

// case8();

// allSettled - Always Array object
// [
//     {
//         "status": "fulfilled",
//         "value": 2
//     },
//     {
//         "status": "fulfilled",
//         "value": 8
//     },
//     {
//         "status": "fulfilled",
//         "value": 3
//     }
// ]
function case9() {
  console.log("Started");
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  }); // 4s

  Promise.allSettled([P4, P5, P6]).then((result) => console.log(result));
}

// case9();

function case10() {
  console.log("Started");
  let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }); // 2s

  let P5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(8);
    }, 1000);
  }); // 1s

  let P6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  }); // 4s

  Promise.allSettled([P4, P5, P6]).then((result) => console.log(result));
}

case10();
