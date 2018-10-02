let element;

element = document;
element = document.all; // print all element
element = document.all[200]; // print index value
element = document.head;
element = document.body;
element = document.domain;
element = document.URL;
element = document.characterSet;
element = document.contentType; // if you are typing json it will print json or print xml

//links
element = document.links;
element = document.links[2];
element = document.links[2].id;
element = document.links[2].innerText;
element = document.links[2].className;
element = document.links[2].classList; // all classes

// forms
element = document.forms;
element = document.forms[0];
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].action;
element = document.forms[0].classList;
element = document.forms[0].className;
element = document.forms[0].classList[0];

//images
element = document.images;

// scripts
element = document.scripts;
element = document.scripts[0];
element = document.scripts[0].getAttribute('src');

// console.log(element);

// looping all the images 
let images = document.images;
let imagesArray = Array.from(images);

// changes HTML collection into an array
// console.log(imagesArray); 

// for each
imagesArray.forEach(function(image){
    // console.log(image); // print all images
    console.log(image.src); // only src
});