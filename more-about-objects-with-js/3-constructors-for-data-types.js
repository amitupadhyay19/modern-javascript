// Constructors for data types

// =======string
const name1 = 'Rahul';
const name2 = new String('Rahul'); // constructor way of creating string


// console.log(name1);
// console.log(name2);

// diference
// console.log(typeof name1); // string
// console.log(typeof name2); // object

// if(name1 == name2) {  print => yes
// if(name1 === name2) { // no = because also check data type
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// // ======numbers

// const number1 = 20;
// const number2 = new Number(20);

// console.log(number1);
// console.log(number2);

// // ======Booleans

// const boolean1 = true;
// const boolean2 = new Boolean(false);

// console.log(boolean1);
// console.log(boolean2);


// // =========== functions
// const function1 = function(a,b) {
//     return a + b;
// }
// const function2 = new Function('a', 'b', 'return a + b');

// console.log(function1(2,3));
// console.log(function2(5,5));


// // objects 

// const person1 = {name: 'Amit'};
// const person2 = new Object({name: 'Amit'});

// console.log(person1);
// console.log(person2);

// arrays

const array1 = [1,2,3,4];
const array2 = new Array(1,2,3,4);

console.log(array1);
console.log(array2);