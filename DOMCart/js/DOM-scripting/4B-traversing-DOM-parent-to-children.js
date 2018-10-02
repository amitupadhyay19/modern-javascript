// traversing

const courseList = document.querySelector('#courses-list');

let element;

// element = courseList.children; 
// element = courseList.children[0]; 
// element = courseList.children[1].children; 
// element = courseList.children[1].children[0]; 
element = courseList.children[1].children[0].children[0].children[1].lastChild; // text = means wide space in html
element = courseList.children[1].children[0].children[0].children[1].lastElementChild; 
element = courseList.children[1].children[0].children[0].children[1].firstElementChild; 
element = courseList.children[1].children[0].children[0].children[1].childElementCount; // 5 


console.log(element);