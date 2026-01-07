Promise.resolve().then(() => {
  console.log("Promise");
  setTimeout(() => {
    console.log("Timeout");
  }, 0);
});

//await loop
async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

test();
console.log("C");
