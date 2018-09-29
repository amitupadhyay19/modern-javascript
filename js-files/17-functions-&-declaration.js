// functions

// function declaration

// function helloVisitor() { 
//     console.log('Hello & Welcome to our website');
// }

// function helloVisitor(name) { // with parameters
//     console.log(`Hello ${name} & Welcome to our website`);
// }

function helloVisitor(firstName, lastName) { // multiple parameters
    console.log(`Hello ${firstName} ${lastName} & Welcome to our website`);
} // ans = Hello Amit undefined & Welcome to our website // remove

//for undefined if we remove one we can do like this // this one is a new method and more organized

// function helloVisitor(firstName = '', lastName = '') { 
function helloVisitor(firstName = 'visitor', lastName = 'Upadhyay') { 
    console.log(`Hello ${firstName} ${lastName} & Welcome to our website`);
}

// earlier version of js call should be like this // old method

// function helloVisitor(firstName, lastName) { 
//     if(typeof firstName === 'undefined') {firstName = 'Rahul'}
//     if(typeof lastName === 'undefined') {lastName = 'Upadhyay'}
//     console.log(`Hello ${firstName} ${lastName} & Welcome to our website`);
// }

// a function must be called

// helloVisitor(); 
// helloVisitor('Amit'); 
// helloVisitor('Amit', 'Upadhyay');
helloVisitor('Amit'); // remove one of this  


// ======== another function

function addition(number1, number2) {
    return number1 + number2;
}
// addition(1,2); // calling function not working here

// let result = addition(1,2);

// for differenrt values // we can use more than once
let result; 
result = addition(1,2);
result = addition(10,50);
result = addition(3, 4);

console.log(result);

 
  