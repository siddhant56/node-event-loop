/* const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log("This is from RS callback");
});

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
 */

//Summary

//The event loop is a C program that orchestrates or co-ordinates the execution of synchronous and async code in node js
