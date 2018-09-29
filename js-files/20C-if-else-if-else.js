// ELSE if opeartor

// // let currentTime = 10;
// let currentTime = -3; // 1
// // let currentTime = 15;
// // let currentTime = 23;
// // let currentTime = 28;

// if (currentTime <= 10) {
//     console.log('Good Morning'); // 1 print this
// } else if (currentTime <= 18) {
//     console.log('Good Afternoon') // 2 print
// } else if(currentTime <= 24) {
//     console.log('Good Night');  // 3
// } else {
//     console.log('INVALID!!'); // 4
// }

// ======= && operator

let currentTime = 25;

if (currentTime  > 0 && currentTime <= 12) {
    console.log('Good Morning');
} else if (currentTime > 12 && currentTime <= 18) {
    console.log('Good Afternoon')
} else if (currentTime > 18 && currentTime <= 24) {
    console.log('Good Night');
} else {
    console.log('INVALID!!');
}