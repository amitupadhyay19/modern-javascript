//var

var learning = 'javascript'; // single quotes
var learning = "javascript"; // double quotes

// variables with 2 or more words 
var firstName = " Amit Upadhyay"; // camelcase
var first_name = " Amit Upadhyay"; // underscore
var FirstName = " Amit Upadhyay"; // pascal case

// this one is most common use in js
var firstName = " Amit Upadhyay"; // camelcase -- standard way of writing variables

// these are datatypes
var learning = 'javascript'; // string variable
var age = 18; // numbers
var job = true; // boolean


//you can also define variable without any value

var learn; // it is undefined beacause the variable exist but it doesn't contain any value

//now you can use like this
learn = 'javascript';

console.log(learn); 

//  creating multiple variable with or without any value

// with values
var learning = "javascript",
    name = "amit";

// without any values

var learning, name, age;

learning = "javascript";
name = "amit";
age = "20";

console.log(learning);
console.log(name);
console.log(age);

// 2 different values with the same name
var learning = "js";
var learning = "modern js";

console.log(learning);