//----call-back function example --> function passed as argument.
function processUserInput(name, callback) {
console.log(`Processing user: ${name}`);
callback();
}
function displayMessage() {
console.log("User processed successfully!");
}
processUserInput("John", displayMessage);
// Output:
// Processing user: John
// User processed successfully!

//--higher order function

function multiplyBy(factor) {
return function (num) {
return num * factor;
};
}
const double = multiplyBy(2);
console.log(double(5)); // Output: 10