// Traversing from the children to parent

const cartBtn = document.querySelector('.add-to-cart');

let element;

// parent node
element = cartBtn;
element = cartBtn.parentNode;
element = cartBtn.parentElement;  // same output
element = cartBtn.parentElement.parentElement;  
element = cartBtn.parentElement.parentElement.children[0];

// sibling
element = cartBtn.parentNode;
element = cartBtn.previousSibling; // text means wide space
element = cartBtn.previousElementSibling; // this avoid wide space and select only element
element = cartBtn.previousElementSibling.previousElementSibling;
element = cartBtn.nextElementSibling; // nothing beacuse cartBtn is last one
// console.log(element);


// =========== course name ============
const courseName = cartBtn.parentElement.querySelector('h4');

// next element sibling
element = courseName.nextElementSibling;
element = courseName.nextElementSibling.nextElementSibling;
element = courseName.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
element = courseName.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(element);
console.log(cartBtn.parentElement);