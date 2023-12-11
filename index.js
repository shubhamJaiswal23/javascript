//Destructuring of an Array
//syntax -> const [values] = arrayName

const numbers = [1, 2, 3, 4, 5, 6, 7];

const [one, two, , four, ...rest] = numbers;

console.log(one, two, four, rest);

const max = Math.max(...numbers);
console.log(max);

const min = Math.min(...numbers);
console.log(min);

console.log(...numbers);
