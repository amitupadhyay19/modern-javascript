// string methods 

const learning = 'Learning javascript is great!';
//suppose you are validating form
const email = 'email@email.com';

let output;
//length
output = learning.length;
//concat
output = learning.concat(" ", "and fun"); // concat is going to take 2 parameters
//uppercase
output =learning.toUpperCase();
//lowercase
output = learning.toLowerCase();
//indexof
output = learning.indexOf('javascript'); // 9
output = learning.indexOf('PHP');  //-1

//check if @ exist on the from
output = email.indexOf('@');

if(output > 0) {
    console.log('Valid Email');
} else {
    console.log('Invalid Email');
}

// substring
// This method extracts the characters in a string between "start" and "end", not including "end" itself.
output = learning.substring(0, 10) // learning j
output = learning.substring(4, 10); // ans = ning j

//substring from the end
output = learning.substring( learning.length - 6 ); // great!

//slice
output = learning.slice(0, 10); // going backwards is not possible in slice //learning j
output = learning.slice(-6); //great!

//split
output = learning.split(' ');

//example

const hobbies = 'read, walk, listen to music, write, learn to program';

output = hobbies.split(',');

//replace
output = learning.replace('javascript', 'Modern JS');

//include
output = learning.includes('javascript'); //true
output = learning.includes('PHP'); //false

//repeat
let greet = "Hello ";

output = greet.repeat(5);


console.log(output);