//functions in JavaScript
//syntax -> function funcName (para1, para2, ...){
// code to be executed
//}

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));

//In order to get the output of a function we use the { return } keyword.

//function expresssion in JavaScript
const minus = function (num1, num2) {
  return num1 - num2;
};

console.log(minus(3, 2));

const minus1 = (num1, num2) => num1 - num2;

console.log(minus1(4, 2));
