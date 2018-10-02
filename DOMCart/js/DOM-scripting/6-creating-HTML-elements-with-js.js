// create a new element

// create a new <a>
const newLink = document.createElement('a');

// add a class
newLink.className = 'link';
// add th href
newLink.href = '#'; // this one better
newLink.href = '//https:www.google.com';
// second way
newLink.setAttribute('href', '#');

// add the text
newLink.appendChild(document.createTextNode('New link'));

// add the elemnet to the HTML
document.querySelector('#primary').appendChild(newLink);

console.log(newLink);

