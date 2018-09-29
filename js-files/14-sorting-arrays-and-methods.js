// sorting arrays and other methods 

const months = new Array('January', 'February', 'march', 'April', 'May', 'June');

//reverse means opposite
// months.reverse(); 

//concatenate 2 arrays
const array1 = [1, 2, 3],
    array2 = [9, 8, 7];

console.log(array1.concat(array2)); // adding both arrays

// order an array sort
let fruits = ['Banana', 'Apple', 'Strawberry', 'Orange', 'Watermelon']
// console.log(fruits.sort()); // alphabatical order
console.log(fruits.sort().reverse()); // 

// numbers
const arrayNumbers = [3, 1, 100, 4, 7, 7, 3, 1, 25, 14, 67]; //this only sort the first number

//arrayNumbers.sort();

//order from lower to the greater value // for numbers you do like this

arrayNumbers.sort(function (number1, number2) {
    return number1 - number2;
});

//order from greater to the lower value

arrayNumbers.sort(function (number1, number2) {
    return number2 - number1;
});


console.log(arrayNumbers);


// console.log(months);