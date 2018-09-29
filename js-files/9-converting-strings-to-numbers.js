const number1 = '50',
      number2 = 10,
      number3 = 'Nine';

console.log(number1 + number2);

// convert number1 into number // 2 methods

console.log( Number(number1) + number2);
console.log( parseInt(number1) + number2);

console.log(number3);
console.log(Number(number3)); // Nan because this not a number

// concatenate the values
console.log(number1 + number2);

// in this case the substraction will work
console.log(number1 - number2); // this is working because js knows this - sign is only intended to use in numbers

