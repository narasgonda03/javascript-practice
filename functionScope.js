//---Function Scope ---
function msg(){
    let message = "Hello";
    console.log(message);
}
msg();
//console.log(message) --> cann't access inside function variable from outside the function

//--- Closures(Functions inside functions) ---
let count
function outer(){
     count = 0;
    return function inner(){
        count++;
        console.log(count);
    }
}
let increment = outer();
increment();
increment();
increment();
console.log(count)