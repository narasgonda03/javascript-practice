function Person(name) {// Constructor function used to create Person objects
  this.name = name;// Assign name property to the object
}
Person.prototype.greet = function () {// Add greet method to Person prototype for all Person objects.
  console.log("Hello, " + this.name);// Greet method implementation used to print greeting message
};
let john = new Person("John");// Create a new Person object with name "John" for testing
john.greet(); // Hello, John
