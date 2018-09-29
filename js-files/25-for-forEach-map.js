// for loop

const todo = ['Homework', 'Food', 'Project',  'Learn JS'];

// for(let i = 0; i < todo.length; i++){
//     console.log(todo[i]);
// }

// for each
// todo.forEach(function(assignment, index){  // index will print index value and
//     console.log(`${index} : ${assignment}`); // assignment will print items of array
// })


// map
// const shoppingCart = [
//     {id: 1, product: 'Book'},
//     {id: 2, product: 'Shirt'},
//     {id: 3, product: 'Album'}
// ];
// const productName = shoppingCart.map(function(productName){
//     return productName.product;
// });

// console.log(productName); // it will print all product name of object


// iterators in ES6
let myCar = {
    model: 'Camaro',
    engine: '6.0',
    year: 1969,
    make: 'Chevy'
}

for(let key in myCar) {
    // console.log(`${myCar[key]}`); // print values from the object  // only values
    console.log(`${key} : ${myCar[key]}`); // it will print both   
}