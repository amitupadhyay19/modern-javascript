// const in arrays and objects

const name = 'Amit';
name = 'Rahul'; // because const cannot be reassign

const newArray = [1,2,3];
newArray[0] = 'New element in the array';
newArray.push('Something New');

// newArray = [9,8,7]; // you cannot reassign

console.log(newArray);



// object 

const car = {
    name: 'Mustang',
    engine: 6.4
}

car.name = 'challenger';

// you cannot reassign the whole variable you can only assign the values
car = {  
    name = 'A new car',
    engine = 2.0
}

console.log(car);

