//IIFE -> (Immediately Invoked function expressions)
(function () {
  console.log('Shubham Jaiswal');
})();

//Adding parameters to IIFE
(function (name) {
  console.log(`Hello, ${name}`);
})('John Doe');
