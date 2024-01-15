const fs = require("fs");

/* 

fs.readFile(__filename, () => {
  console.log("This IS Read File 1");
});

process.nextTick(() => console.log("This is next tick 1"));
Promise.resolve().then(() => console.log("This is promise resolve 1"));

 */

/* 

setTimeout(() => {
  console.log("This is set-timeout 1");
}, 0);

fs.readFile(__filename, () => {
  console.log("This IS Read File 1");
});


*/

/* 

setTimeout(() => {
  console.log("This is set-timeout 1");
}, 0);

process.nextTick(() => {
  console.log("This is next tick 1");
});

Promise.resolve().then(() => {
  console.log("This is promise resolve 1");
});

fs.readFile(__filename, () => {
  console.log("This IS Read File 1");
});

for (let i = 0; i < 20000000; i++) {} 

*/
