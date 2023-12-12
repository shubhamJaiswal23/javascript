//Arrow functions in JavaScript
// Arrow functions allows a short syntax for writing { function expression }

//Arrow functions with implicit return
const sum = (num1, num2) => num1 + num2;

console.log(sum(3, 4));

//arrow function with explicit return
const sum1 = (num1, num2) => {
  return num1 + num2;
};

console.log(sum1(3, 4));
