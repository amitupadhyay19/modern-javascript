// Replace an element

const newHeading = document.createElement('h2');
// add an id
newHeading.id = 'heading';
// add the class
newHeading.classList.add('heading');
// add the new text
newHeading.appendChild(document.createTextNode('The Best Courses'));

// select the old heading
const oldHeading = document.querySelector('#heading');

// parent
const coursesList = document.querySelector('#courses-list');

// Then, replace
coursesList.replaceChild(newHeading, oldHeading);

console.log(newHeading);

