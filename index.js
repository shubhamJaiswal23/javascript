//JavaScript Date() object

//initialize new Date object
let d = new Date();

//using strings as an arguments in date object
d = new Date('01/31/2000 09:30:00');
// console.log(d);

d = new Date('01-31-2001 11:00:15');
// console.log(d);

//using Numbers as an argumemts
d = new Date(2023, 11, 9, 16, 30, 30);
// console.log(d);

//TimeStamp:- number of milliseconds starting from 1st January 1970
d = Date.now();
// console.log(d);

//get the timestamp to a specific date
d = new Date('01-31-2000 11:00:00');
// console.log(d.getTime());
// console.log(d.valueOf());

//Usind DateTimeFormat API
let y;
d = new Date();
// console.log(y);

y = Intl.DateTimeFormat('default').format(d);
// console.log(y);

y = Intl.DateTimeFormat('en-GB').format(d);
// console.log(y);

y = Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(d);
// console.log(y);

//using Locale string Method to Date Object
y = d.toLocaleString('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
});

console.log(y);
