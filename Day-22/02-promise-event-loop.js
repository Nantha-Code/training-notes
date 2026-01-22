console.log(1);

// Async - WebApi
setTimeout(() => {
  console.log(2);
}, 0);

// Async - WebApi - VIP - Micro Task Q
Promise.resolve(4).then((x) => console.log(x));
Promise.resolve(5).then((x) => console.log(x));

console.log(3);
