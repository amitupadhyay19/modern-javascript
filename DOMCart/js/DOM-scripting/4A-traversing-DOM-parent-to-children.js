// traversing

const navigation = document.querySelector('#primary');

let element;
element = navigation.childNodes;
element = navigation.children;
element = navigation.children[0].nodeName; // A means anchor
element = navigation.children[0].nodeType; // 1
// navigation.children[0].textContent = 'New text';
// element = navigation.children[0]; 
element = navigation.children[4].children; // no children 

// 1 = Element
// 2 = Attributes
// 3 = Text Nodes
// 8 = Comments
// 9 = document
// 10 = doctype 

console.log(element);