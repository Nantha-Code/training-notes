// Case 1:
// console.log(a); // Not defined
// // var a = 10;

// console.log(a); // Not defined
// var a = 10;

// var a;
// console.log(a); // undefined
// a = 10;
// console.log(a); // 10

// Compiled - Compiler - Human code -> 1's 0's (file)

// JS -> JIT -> Compilation
// 2 Phase
// 1. Compilation
// 2. Execution

// // JS Guy, Context
// // 1. Compilation Phase - Only declaration are noted
console.log(a); // skip
var a = 10; // JS Guy -  Do you know a? No. Note a (Context) - undefined
console.log(a); // skip

// // 2. Execution Phase
console.log(a); // Do you know a? Yes. Then give me  value - undefined
var a = 10; // Do you know a? Yes. Assign a is 10 (Context)
console.log(a); // Do you know a? Yes. Then give me value - 10

// var - hoisted
// let, const - not hoisted - ❌

// JS Guy, Context
// 1. Compilation Phase - Only declaration are noted
console.log(a); // skip
let a = 10; // JS Guy -  Do you know a? No. Note a (Context) - strict - dont initialize
console.log(a); // skip

// Initialization - Allocating memory
// 2. Execution Phase
// console.log(a); // Do you know a? Yes. Tell me value? Error - Cannot access a before initialization
// let a = 10;
// console.log(a);

// console.log(a); // Error - Not defined
// let a = 10;
// console.log(a);

console.log(a); // TDZ - Temporal Dead zone // Error - Cannot access a
const a = 10;
console.log(a);
