let number;

number = Number('20');
number = Number('20.20102')
number = Number(true); // in js true value = 1
number = Number(false); // false = 0
number = parseInt(false); // Nan = this doesn't work with true or false 
number = Number(null); // 0
number = Number('Hello World'); // Nan not a number
number = Number('1, 2, 3'); // Nan array

//parse Int & Parse float

number = parseInt('100');
number = parseInt('100.20'); // 100 = this will pass only integer number
number  = parseFloat('100.20'); // 100.2

//to fixed
// let number1 = '918389183',
let number1 = '918389183.1020',
    number2 = 918389183.981398139;

// console.log(number1.toFixed()); // toFixed only available for numbers
// console.log(Number(number1).toFixed()); // but there is not use tofixed because we are already using Number remove decimal

console.log(Number(number1).toFixed(2)); // print only 2 after points
console.log(number2.toFixed(6) ); // print only 2 after points