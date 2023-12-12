//ternary operator in JavaScript
function voterAgeValidation(age) {
  age = +age;
  // if (age < 18) {
  //   alert('You are not Eligible to Vote');
  // } else {
  //   alert('You are Eligible to Vote');
  // }
  age < 18
    ? alert('You are not Eligible to Vote.')
    : alert('You are Eligible to Vote');
}

voterAgeValidation(prompt('What is your Age?'));
