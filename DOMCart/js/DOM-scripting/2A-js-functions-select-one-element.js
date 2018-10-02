// selecting DOM elements

let heading = document.getElementById('heading'); 

// console.log(heading.id);
// console.log(heading.textContent);
console.log();

// change the css
heading.style.background = '#333';
heading.style.backgroundColor = '#ccc';
heading.style.color = '#fff';
heading.style.padding = '10px';
heading.style.marginTop = '50px';

// change the text
heading.textContent = 'The best course!';
// another way
heading.innerText = 'New Heading';

// heading.innerHTML = 'AMIT UPADHYAY';

// Query selector // is going to return only one value
const learningHeading = document.querySelector('#learn');

learningHeading.textContent = 'A new heading';

// console.log(learningHeading);