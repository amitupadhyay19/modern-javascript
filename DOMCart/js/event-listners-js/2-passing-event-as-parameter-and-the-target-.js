// Event Listners

const clearCartBtn = document.getElementById('clear-cart');

clearCartBtn.addEventListener('click', clearBtnFunction);

// e = event as parameter
function clearBtnFunction(e) {
	// target

	let element;
	element = e;

	// read the target
	element = e.target; // means the element which clicked
	element = e.target.id;
	element = e.target.className;
	element = e.target.innerText;
	element = e.target.innerText = 2 + 2;

	console.log(element);
}