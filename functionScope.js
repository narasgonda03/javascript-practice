//---Function Scope ---
function msg(){
    let message = "Hello";
    console.log(message);
}
msg();
//console.log(message) --> cann't access inside function variable from outside the function

//--- Closures(Functions inside functions) ---
function outer() {
let count = 0;
return function inner() {
count++;
console.log(count);
};
}
const increment = outer();
increment(); // Output: 1
increment(); // Output: 2 