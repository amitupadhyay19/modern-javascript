// variable scope

var a = 'a';
let b= 'b';
const c = 'c';

// function scope
function function_scope() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCTION SCOPE: ' + a, b, c);
}

function_scope();

// block scope (if statements or for)

if(true){
    let a = 'AA'; // if it will not work than it will check global variable
    let b = 'CC';
    const c = 'CC';
    console.log('BLOCK SCOPE: ' + a, b, c);
}

// for loop
// for(let a = 0; a < 10; a++){
for(var a = 0; a < 10; a++){
    console.log(a);
}

// there is difference b/w let and var when comes to global variable

console.log('GLOBAL: ' + a, b, c);