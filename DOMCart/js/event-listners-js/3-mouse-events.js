// mouse events
// create the variables

const heading = document.querySelector('#heading');
const links = document.querySelector('nav');
const clearCartBtn = document.querySelector('#clear-cart');

// click mouse event
// clearCartBtn.addEventListener('click', printEvent);

// Double click
// clearCartBtn.addEventListener('dblclick', printEvent);

// mouse enter
// clearCartBtn.addEventListener('mouseenter', printEvent);

// mouse leave
// clearCartBtn.addEventListener('mouseleave', printEvent);

// mouse over // same as mouse enter
// clearCartBtn.addEventListener('mouseover', printEvent);

// mouse out / same as mouseleave
// clearCartBtn.addEventListener('mouseout', printEvent);

// mouse up // click and hold after leave works
// clearCartBtn.addEventListener('mouseup', printEvent);

// mouse down click works
clearCartBtn.addEventListener('mousedown', printEvent);

// mouse move // this is very helpful when you develop video games
heading.addEventListener('mousemove', printEvent);



function printEvent(e) {
	// console.log(e); 
	console.log(`THE EVENT IS: ${e.type}`); // type = click
}
