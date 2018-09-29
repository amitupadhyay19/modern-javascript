// numbers

const number1 = 30,
      number2 = 20,
      number3 = -3;

let result;
// Order of operations
result = 20 + 30 * 2;
result = (20 + 30) * 2;

// console.log(result);

// 20% discount from a shopping cart
const cartItems = (20+30+30+40);
const discount = (cartItems / 100) * 20;
const totalPay = cartItems - discount;

//print the results
console.log('Total: ' + cartItems);
console.log('Discount: ' + discount);
console.log('Pay: $' + totalPay);


// --------------

let score = 5;
score++; 
score--; 
++score;

score += 10; // score = score + 10;

// when you score++ = 1 add, score-- = -1, it will print after /// --score = 1, ++score = 1, it will print direct 

console.log(score);
