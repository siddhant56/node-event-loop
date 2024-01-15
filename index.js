/* 

Experiment - 1 for event loops

console.log("CLG 1");

//Next tick micro task queue

process.nextTick(() => console.log("This is process.next 1"));

console.log("CLG 2");

*/

/*

Experiment - 2

Next Tick Queue executes first then Promise queue is executed

Promise.resolve().then(() => {
  console.log("This is promose.Resolve 1");
});

process.nextTick(() => console.log("This is process.next 1")); 

*/

/* 

Experiment - 2.1

Promise.resolve().then(() => {
  console.log("This is promise.Resolve 1");
});

Promise.resolve().then(() => {
  console.log("This is promise.Resolve 2");
  process.nextTick(() =>
    console.log("This is inner next tick inside promise - II")
  );
});

Promise.resolve().then(() => {
  console.log("This is promise.Resolve 3");
});

process.nextTick(() => console.log("This is process.next 1"));
process.nextTick(() => {
  process.nextTick(() =>
    console.log("This is inner next tick inside Next Tick - II")
  );
});
process.nextTick(() => console.log("This is process.next 3")); 

*/

/* 

Experiment - 3

//Callbacks in micro tasks queue are executed before timer queue
//Callbacks in micro tasks queue are executed in between the execution of callback in timer queue

setTimeout(() => {
  console.log("This is set-timeout 1");
}, 0);

setTimeout(() => {
  console.log("This is set-timeout 2");

  process.nextTick(() => {
    console.log("this is inner next tick inside set-timeout 2");
  });
}, 0);

setTimeout(() => {
  console.log("This is set-timeout 3");
}, 0);

Promise.resolve().then(() => {
  console.log("This is promise.Resolve 1");
});

Promise.resolve().then(() => {
  console.log("This is promise.Resolve 2");
  process.nextTick(() =>
    console.log("This is inner next tick inside promise - II")
  );
});

Promise.resolve().then(() => {
  console.log("This is promise.Resolve 3");
});

process.nextTick(() => console.log("This is process.next 1"));
process.nextTick(() => {
  process.nextTick(() =>
    console.log("This is inner next tick inside Next Tick - II")
  );
  console.log("This is process.next 2");
});
process.nextTick(() => console.log("This is process.next 3"));
 

*/
