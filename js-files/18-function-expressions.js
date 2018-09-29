// functions

// functions expressions

// const sum = function(number1, number2){
const sum = function(number1 = 0, number2 = 0){ 
    return number1 + number2;
}

console.log(sum(3,3));
console.log(sum(4,8));
console.log(sum(14,18));
console.log(sum(24,28));
console.log(sum()); // for no parameters => for no values = Nan, with values = 0