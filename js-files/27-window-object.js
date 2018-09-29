// console.log() belongs to window

//===== confirm

// if(confirm('Are you sure')) {
//     console.log('Deleted...');
// } else {
//     console.log('Nothing Happens...')
// }

//==== retrieve width and height of the window

// let height, width;

// height = window.outerHeight;
// width = window.outerWidth;

// height = window.innerHeight;
// width= window.innerWidth;

// if(width > 1000) {
//     document.body.style.backgroundColor = 'red';
// } else if (width > 500) {
//     document.body.style.backgroundColor  = 'blue';
// } else {
//     document.body.style.backgroundColor  = 'green';
// }

// console.log(height);
// console.log(width);

// ======== location

let urllocation  = window.location;

console.log(urllocation.host);
console.log(urllocation.hostname);
console.log(urllocation.port);
console.log(urllocation.href);

// redirect via js
// window.location.href = 'http://google.com';

console.log(urllocation.search);

console.log(urllocation);