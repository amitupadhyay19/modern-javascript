// numbers to strings

// let number = 90210,
//     output;

//     // output = number;
//     output = String(number);

// console.log(output.length); // .length is a method only work for string
// console.log(typeof output); //

// boolean to string

let output;
output = String(true);

// date to string  date is an object
output = new Date();
output = String(output);
// console.log(output.includes('2018')); // true 

// array into string
output = String([1,2,3,4]);

// to string
// output = 20.toString(); // error string more use when we have object / toString not work with numbers
output = true.toString(); // it is working 
output = true;  
output = [1,2,3].toString(); // 
output = {name: 'Amit'}.toString(); // 

console.log(output);
console.log(typeof output); //