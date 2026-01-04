console.log(x)//undefined due to hoisting of var
var x = 10
console.log(y)
let y = 20//ReferenceError: Cannot access 'y' before initialization due to temporal dead zone of let