console.log("Start");//first line

setTimeout(() => {
  console.log("Timeout");//after microstack queue is complete then callback function is execute. 
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");//is it in microstack queue have higher priority
});

console.log("End");//second line
