try{// Basic error handling example
    var a = 10;
    var b = 0;
    var result = a/b;
    if(!isFinite(result)){
        throw new Error("Division by zero is not allowed.");
    }
}catch(e){//catch the error used in try block and handle it here
    console.error("Error caught: " + e.message);
}