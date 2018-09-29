// creating an array

// const numbers = [10,20,30,40,50];

// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[2]);
// console.log(numbers[4]);

// array of months / second method
const months = new Array('January', 'February', 'march', 'April', 'May', 'June');

// console.log(months);
// console.log(months[5]);
// check the length of array
console.log(months.length);
// checkif this is an array
console.log(Array.isArray(months)); // true

let name = 'Amit';
console.log(Array.isArray(name)); // false

//Mixed values
// const mixedArray = ['Hello', 10, true, 'Yes', null];

// console.log(mixedArray);