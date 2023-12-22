//Classes in JavaScript
//Class syntax:->

//class ClassName{
// constructor() {...}
// method1() {...}
// method2() {...}
// method3() {...}
// }

class User {
  constructor(firstName, lastName, age, uid) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.uid = uid;
  }

  userInfo() {
    return `Hello, my name is ${this.firstName} ${this.lastName}.`;
  }

  userId() {
    return `${this.firstName} ${this.lastName} user-id is ${this.uid}.`;
  }
}

//Instantiating the user object using User Class
// const user1 = new User('John', 'Doe', 45, 100);

// console.log(user1.userInfo());
// console.log(user1.userId());
