//Returning an Object with arrow function

//First Method
const objReturn = () => {
  return {
    name: 'John Doe',
    age: 40
  };
};

console.log(objReturn());

//Second Method
const objReturn2 = () => ({ name: 'John Doe', age: 40 });

console.log(objReturn2());

//Third Method
const objReturn3 = (name, age) => {
  return {
    name,
    age
  };
};

console.log(objReturn3('Shubham', 23));

//Fourth Method
const objReturn4 = (name, age) => ({ name, age });

console.log(objReturn4('John Cena', 46));
