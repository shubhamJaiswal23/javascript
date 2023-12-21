//Contructor function
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.intro = function () {
    return `Hello, my name is ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`;
  };
}

//Instantiate the Object
const person1 = new Person('Shubham', 'Jaiswal', 23);
const person2 = new Person('Anant', 'Chauhan', 25);
const person3 = new Person('Shivam', 'Agarwal', 23);

// console.log(person1.intro());
// console.log(person2.intro());
// console.log(person3.intro());

// console.log(person1.constructor);

// console.log(person1 instanceof Person);
