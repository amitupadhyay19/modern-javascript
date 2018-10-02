// classes, Ids & Attributes

const link = document.querySelector('.link');
let element;

element = link;

// read the class
element = link.className; // link
// read the class (DOM token list)
element = link.classList;
// access specify class with classList
element = link.classList[0]; // link
// add a new class
link.classList.add('new-class');
// remove the class
link.classList.remove('link')

//===== IDs
link.id = 'new-id';
// remove the id
link.id = '';
link.removeAttribute('id');

//=== Attribute function
element = link.getAttribute('href'); // return href
element = link.getAttribute('class');
element = link.setAttribute('href', 'http://facebook.com'); // add
element = link.setAttribute('target', '_blank');
element = link.setAttribute('data-link', '10'); // custom attribute
element = link.hasAttribute('data-link'); // check = true
element = link.removeAttribute('data-link');

console.log(element);