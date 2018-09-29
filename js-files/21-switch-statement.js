// Switch statement 

// const paymentMethod = 'check';

// switch(paymentMethod){
//     case 'cash': 
//         console.log(`Your payment method is: ${paymentMethod}`);
//         break;
//     case 'check':
//         console.log(`Your payment method is: ${paymentMethod} we will verify the funds...`);
//         break;
//     case 'card':
//         console.log(`Your payment method is: ${paymentMethod} processing..`);
//         break;
//     default:
//         console.log('Please select a valid payment method');
// }

// assing a variable from the switch case

const cars = ['Camaro', 'Mustang', 'Challenger'];

const selected = 1;
let car;

switch(selected){
    case 0:
        car = cars[0];
        break;
    case 1:
        car = cars[1];
        break;
    case 2:
        car = cars[2];
        break;
}
console.log(`Your selected car is ${car}`);

// var x = "0";

// switch (x) {
//     case 0:
//         text = "Off";
//         break;
//     case 1:
//         text = "On";
//         break;
//     default:
//         text = "No value found";
// }
// console.log(text);
