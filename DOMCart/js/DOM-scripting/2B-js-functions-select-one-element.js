// selecting DOM elements

// let heading = document.getElementById('heading'); 

// Query selector 
const learningHeading = document.querySelector('#learn');

// select a class with querySelector
const tagline = document.querySelector('.tagline');

// const newtext = tagline.textContent.replace('$15', '$12');
// tagline.textContent = newtext;
// console.log(tagline);

//====== query selector returns only the first one // many element with same class ======

// selct a class
// let card = document.querySelector('.card');
// console.log(card);

// select a tag
// let heading = document.querySelector('h2');
// console.log(heading);

// nest your selectors with a CSS syntax
// let image = document.querySelector('.card img');
// console.log(image);

// Queryselector supports nth-child, first-child and last-child
let link ; 

link = document.querySelector('#primary a');
link = document.querySelector('#primary a:first-child');
link = document.querySelector('#primary a:last-child');
link = document.querySelector('#primary a:nth-child(2)');

// link.style.color = 'red';

console.log(link);