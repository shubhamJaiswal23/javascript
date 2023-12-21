//Prototypes in JavaScript
function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

//instantiate the Object using User Contructor function
const user1 = new User('John', 'Doe', 45);

//Add a Method to User Constructor function
User.prototype.intro = function () {
  return `Hello, my name is ${this.firstName} ${this.lastName}`;
};

// console.log(user1.intro());

//Add a property to User Constructor function
User.prototype.nationality = 'American';

// console.log(user1.nationality);
