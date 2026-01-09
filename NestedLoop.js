Promise.resolve().then(() => {
  console.log("P1");

  Promise.resolve().then(() => {
    console.log("P2");
  });
});
