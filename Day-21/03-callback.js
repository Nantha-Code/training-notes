// Fn1 - callback - When fn takes fn as arg
// Since setTimeout takes fn1 as arg - fn1 is callback
// Sync vs Async - Time based

// fn1 -> Async callback
setTimeout(function fn1() {
  console.log("Hi 1");
}, 2000);

// Sync -> callback
[1, 2, 3].map((x) => x * 2);
