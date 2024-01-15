const fs = require("fs");

//Check-Queue  --- IO Pooling --- Between IO Queue and Check Queue

/* 

setTimeout(() => {
  console.log("This is set-timeout 1");
}, 0);

setImmediate(() => {
  console.log("This is set-immediate 1");
});

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

/* setTimeout(() => {
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

  setImmediate(() => {
    console.log("This is set-immediate 1");
  });

  process.nextTick(() => {
    console.log("This is Inner next tick 1 inside read file");
  });

  Promise.resolve().then(() => {
    console.log("This is Inner promise resolve inside read file");
  });
});

for (let i = 0; i < 20000000; i++) {} */

/* setImmediate(() => {
  console.log("This is set-immediate 1");
});

setImmediate(() => {
  console.log("This is set-immediate 2");

  process.nextTick(() => {
    console.log("This is Inner next tick 1 inside set immediate");
  });

  Promise.resolve().then(() => {
    console.log("This is Inner promise resolve 1 inside set immediate");
  });
});

setImmediate(() => {
  console.log("This is set-immediate 3");
});
 */
