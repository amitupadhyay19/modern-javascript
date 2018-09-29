// dates

// const today = new Date();

// // const birthday = new Date('January 19 1992');

// // another ways

// let output;
//                         // month date year
// let birthday = new Date('January 19 1992'); // 1 method
// birthday = new Date('1-19-1992'); //  2 method

// output = birthday;

// // console.log(today);
// console.log(output);

//============== methods in Date ================

const today = new Date();
let output;

// methods
output = today.getMonth();
output = today.getDate();
output = today.getDay(); // day of the week
output = today.getFullYear();
output = today.getHours();
output = today.getMinutes();
output = today.getSeconds();
output = today.getFullYear();
    today.setFullYear(2000);
output = today.getFullYear(); // now it is set to 2000
    today.setMonth(10);
output = today.getMonth();

// console.log(output);
console.log(today);
