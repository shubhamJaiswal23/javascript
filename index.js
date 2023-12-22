//Classes in JavaScript
//Class syntax:->

//class ClassName{
// constructor() {...}
// method1() {...}
// method2() {...}
// method3() {...}
// }

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  userInfo() {
    return `Hello, my name is ${this.firstName} ${this.lastName}.`;
  }
}

//Class Inheritance
class UserId extends User {
  constructor(firstName, lastName, age, uid) {
    super(firstName, lastName, age);
    this.uid = uid;
  }

  userIdInfo() {
    return `${this.firstName} ${this.lastName}'s uid is ${this.uid}.`;
  }
}

const user3 = new UserId('shubham', 'Jaiswal', 23, 101);
console.log(user3.userIdInfo());
