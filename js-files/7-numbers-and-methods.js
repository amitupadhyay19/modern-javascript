// numbers

const number1 = 30,
number2 = 20,
number3 = -3;

let result;
//addition
result = number1 + number2;
console.log(result);
// substraction
result = number1 - number2;
// multiply
result = number1 * number2;
//division
result = number1 / number2;
//modulous
result = number1 % number2;

// maths
//pi
result = Math.PI;
//round
result = Math.round(2.0); // value < 5 = 2, value => 5 = 3 
//round up or down
result = Math.ceil(2.2); // after . take approx 3
result = Math.floor(2.9); // takes only 2
//square root
result = Math.sqrt(144);
// abs number
result = Math.abs(number3);
//power
result = Math.pow(8, 3);  // 8x8x8 = 512
//get the minimum number from list
result= Math.min(10,8,3,4,5,6,7,8,-1);
//get the maximum number from list
result= Math.max(10,8,3,4,5,6,7,8,-1);



console.log(result);
// console.log(Math.pow(9, 3)); 