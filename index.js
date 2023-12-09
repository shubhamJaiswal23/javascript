//Primitive Data-types stored in 'Stack' Location of memory.
let name = 'john';
console.log(name);

let newName = name;
newName = 'shubham';
console.log(newName);

//Refence Type stored in the 'heap' location of the memory.
const person = {
  name: 'Brad',
  age: 45
};

console.log(person);

let newPerson = person;
newPerson.name = 'Sara';

console.log(newPerson);
console.log(newPerson);
