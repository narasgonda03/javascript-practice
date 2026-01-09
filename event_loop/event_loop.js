console.log("Start"); //first line execute

setTimeout(() => {
  console.log("Timeout"); //It is in web api env,
  //after time complete it go into callback queue then event loop check callstack is empty
  //if it empty then push to callstack then Timeout is print on console.
}, 5000);

console.log("End"); //second line

