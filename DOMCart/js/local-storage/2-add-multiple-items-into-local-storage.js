

const localStorageContent = localStorage.getItem('names');


let names;
if(localStorageContent === null) {
    names = []; // empty array
} else {
    names = JSON.parse( localStorageContent );
}

// console.log(JSON.parse( localStorageContent) ); // string to array

// names.push('javascript');
names.push('Amit');
names.push('Rahul Upadhyay');
names.push('John');
localStorage.setItem('names', JSON.stringify (names) );



// ===========

// const myArray = [1,2,3];

// // you change this array into an string // function is
// console.log(JSON.stringify (myArray) ); // now this is a string // save value only as stringin local storage

// console.log(localStorageContent);