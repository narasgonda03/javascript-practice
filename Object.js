let person = {
    name :"Aakash",
    age : 24,
    country : "India"

}
console.log(person.name)//accessing the person's name property using dot notation
person.age = 25//modifying the age property of person object
console.log(person.age) // printing the modified age property
delete person.country //deleteing the country property from person object
console.log(person.country) // trying to access the deleted country property, will print undefined