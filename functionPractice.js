let divide = function(a,b){//store function in add variable
    return a/b
}
console.log(divide(10,2))//call only the add variable

const mul=(a,b)=>a*b;//create function mul using arrow function
console.log(mul(10,5))

//default parameter
function greet(name = "Aakash"){ //default parameter in function
    console.log(`Hello, ${name}!`);  //strictly use "`" in between parenthesis.
}
greet();
greet("Rohit");

//rest parameter --> multiple argument passed as array
function sum(...numbers) {
return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(2, 4, 6, 8)); // Output: 20
