console.log("Start");

queueMicrotask(() => {
  console.log("Microtask");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
