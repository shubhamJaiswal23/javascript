//Destructuring of an Object
//syntax -> const {key} = object;

const person = {
  name: 'Shubham',
  age: 23,
  user: {
    email: 'shubhamjaiswal@gmail.com'
  }
};

const { name, age: myAge } = person;

console.log(person);

console.log(name);

//Assign new name to age property
console.log(myAge + 1);

const {
  user: { email }
} = person;

console.log(email);
