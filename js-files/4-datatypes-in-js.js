// data types in js

// if you specify the data types of variable it cannot be changed
let variable = "Amit";
    variable =  20;
    variable =  true;
    variable =  undefined;
    variable = Symbol('my new symbol');

    variable = 1;
    variable = 10.345;
    variable = -300;
    variable = 20;
    variable = '20';
    
    //booleans
    variable = false;

    console.log(variable);

    //null
    //the nulls values are treated as an object in javascript
    let bankSavings = null;

    //undefined
    let person;

    //symbols
    let symbolES6 = Symbol("This is a symbol");

    // arrays = arrays are objects in js
    let languages = ['HTML', 'JS', 'PHP'];

    //objects
    let person2 = {
        name: 'amit',
        country: 'india'
    }

    //dates = are also objects
    let today = new Date();

    console.log(today);
    console.log(typeof today);

    // variables = they can switch from different data types
